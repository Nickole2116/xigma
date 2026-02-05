<?php 
namespace App\Http\Controllers\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Log;
use Str;
use DB;

use App\Models\AdminLogin;
use App\Models\Order;
use App\Models\OrderLog;
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
}