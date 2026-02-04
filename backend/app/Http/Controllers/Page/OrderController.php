<?php 
namespace App\Http\Controllers\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Log;
use Str;

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

            if($request->hasFile('attachment')){
                $path = Storage::disk('s3')->put('orders', $request->file('attachment'));
                $attachment  = Storage::disk('s3')->url($path);
            } else {
                $attachment = null;
            }
            $order = Order::create([
                'comments' => $request->comments,
                'attachment_url' => $attachment,
                'user_id' => $request->user_id,
                'admin_id' => $request->admin_id,
                'ref_ticket' => $request->ref_ticket,
                'status' => 1,
                'created_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
                'updated_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
            ]);

            if($order) {
                OrderLog::create([
                    'order_id' => $order->id,
                    'action' => 'CREATE_ORDER',
                    'payload' => json_encode([
                        'comments' => $request->comments,
                        'attachment_url' => $attachment,
                        'user_id' => $request->user_id,
                        'admin_id' => $request->admin_id,
                        'ref_ticket' => $request->ref_ticket
                    ]),
                    'created_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
                    'updated_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
                ]);
            }
            
        } catch (\Throwable $e) {
            DB::rollBack();
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);
        }
        finally {
            DB::commit();
            return response()->json([
                'message' => 'Order created successfully',
            ]);
        }
    }
}