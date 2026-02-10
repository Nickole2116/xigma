<?php 
namespace App\Http\Controllers\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Log;
use Str;
use DB;
use Auth;

use App\Models\Admin;
use App\Models\AdminLogin;
use App\Models\Order;
use App\Models\OrderLog;
use App\Models\Project;
use App\Models\ProjectItem;
use App\Models\ProjectLog;
use App\Models\Category;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;


class OrderController extends Controller {

    public function uploadFile(Request $request) {
        /*try {
            $result = Storage::disk('s3')->put('debug-test.txt', 'ok');
        
            return response()->json([
                'result' => $result,
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);
        }*/
    }

    public function createOrder(Request $request) {
        // start 
        DB::beginTransaction();
        try {
            $attachment = null;
            $ref_ticket = Str::random(6);

            if($request->hasFile('attachment')){
                $path = Storage::disk('s3')->put('orders', $request->file('attachment'));
                $attachment  = Storage::disk('s3')->url($path);
            } else {
                $attachment = null;
            }
            $order = Order::create([
                'comments' => $request->comments,
                'attachment_url' => $attachment,
                'user_id' => $request->user_id ?? null,
                'admin_id' => $request->admin_id ?? null,
                'ref_ticket' => $ref_ticket,
                'status' => 1,
                'created_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
                'updated_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
            ]);

            if($order) {
                $order_log = OrderLog::create([
                    'order_id' => $order->id,
                    'action' => 'CREATE_ORDER',
                    'payload' => json_encode([
                        'comments' => $request->comments,
                        'attachment_url' => $attachment ?? null,
                        'user_id' => $request->user_id ?? null,
                        'admin_id' => $request->admin_id ?? null,
                        'ref_ticket' => $ref_ticket,
                    ]),
                    'created_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
                    'updated_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
                ]);
            }

            DB::commit();

            return response()->json([
                'message' => 'Order created successfully',
                'order' => $order,
                'order_log' => $order_log,
            ]);
            
        } catch (\Throwable $e) {
            DB::rollBack();
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function getOrderInit(Request $request) {
        $orders = Order::with('admin', 'user')->get();
        return response()->json([
            'status' => 200,
            'message' => 'Order listing fetched successfully',
            'orders' => $orders,
        ]);
    }

    public function createProject(Request $request) {
        // start 
        DB::beginTransaction();
        try {
            $attachmenturl = null;

            if($request->hasFile('attachment')){
                $file = $request->file('attachment');
                $path = Storage::disk('s3')->put('orders', $file);
                $attachmenturl  = Storage::disk('s3')->url($path);
                $attachmentfileformat = $file->getMimeType();
            }
            $order = Order::where('ref_ticket', $request->order_ref)->latest()->first();
            $project = Project::create([
                'status' => 1,
                'attachment' => (string) $attachmenturl,
                'attachment_fileformat' => (string) $attachmentfileformat,
                'projects_name' => $request->project_name,
                'category_id' => $request->category_id ?? 1,
                'admin_id' => $request->admin_id ?? $order->admin_id, 
                'users_id' => $order->user_id ?? null,
                'created_by' => $request->admin_id ?? $order->admin_id,
                'created_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
                'updated_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
                'order_id' => $order->id ?? null,
            ]);

            if($project) {
                
                $project_log = ProjectLog::create([
                    'project_id' => $project->id,
                    'action' => 'CREATE_PROJECT',
                    'payload' => json_encode($project),
                    'created_by' => $request->admin_id ?? $order->admin_id,
                    'created_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
                    'updated_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
                ]);
            }

            DB::commit();

            return response()->json([
                'status' => 200,
                'message' => 'Project created successfully',
                'project' => $project,
            ]);
        } catch (\Throwable $e) {
            DB::rollBack();
            return response()->json([
                'error' => $e->getMessage(),
                'request' => $request->all()
            ], 500);
        }
    }

    public function getProjectInit(Request $request) {
        $project = Project::with('admin', 'user', 'category', 'items')->get();
        return response()->json([
            'status' => 200,
            'message' => 'Product listing fetched successfully',
            'project' => $project,
        ]);
    }

    public function getAllCategories(Request $request) {
        $cat = Category::with('products')->where('status', 1)->get();
        return response()->json([
            'status' => 200,
            'message' => 'Category listing fetched successfully',
            'category' => $cat,
        ]);
    }

    public function createProjectItem(Request $request) {
        // start 
        DB::beginTransaction();
        try {

            if (!$request->hasFile('attachments')) {
                return response()->json([
                    'status' => 422,
                    'message' => 'No attachments uploaded'
                ], 422);
            }

            $projects = [];

            foreach ($request->file('attachments') as $file) {
                // insert to S3
                $path = Storage::disk('s3')->put('project_items', $file);
                $attachmenturl  = Storage::disk('s3')->url($path);
                $attachmentfileformat = $file->getMimeType();
                $originalName = $file->getClientOriginalName();

                $projectitem = ProjectItem::create([
                    'path' => (string) $attachmenturl,
                    'path_fileformat' => (string) $attachmentfileformat,
                    'item_name' => $originalName,
                    'project_id' => $request->project_id ?? null,
                    'isPin' => 0,
                    'created_by' => $request->admin_id ?? $order->admin_id,
                    'created_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
                    'updated_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur')
                ]);

                if($projectitem) {
                    $project_log = ProjectLog::create([
                        'project_id' => $projectitem->project_id,
                        'action' => 'CREATE_PROJECT_ITEM',
                        'payload' => json_encode($projectitem),
                        'created_by' => $request->admin_id ?? $order->admin_id,
                        'created_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
                        'updated_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
                    ]);
                }

                $projects[] = $projectitem;
            }

            DB::commit();

            return response()->json([
                'status' => 200,
                'message' => 'Project item created successfully',
                'project' => $projectitem,
            ]);
        } catch (\Throwable $e) {
            DB::rollBack();
            return response()->json([
                'error' => $e->getMessage(),
                'request' => $request->all()
            ], 500);
        }
    }
}