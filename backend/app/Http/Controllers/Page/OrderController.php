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
}