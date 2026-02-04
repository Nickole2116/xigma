<?php

namespace App\Http\Controllers\Page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Log;
use Str;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Admin;
use App\Models\UserLogin;
use App\Models\AdminLogin;
use Carbon\Carbon;
use DateTime;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;


class AuthController extends Controller
{
    public function index(Request $request)
    {
        return response()->json([
            ['email' => 'nickoletan12@gmail.com',
            'name' => 'Nickole Tan'],
            ['email' => 'nickoletan12@gmail.com',
            'name' => 'Nickole2 Tan']
        ]);
    }
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('username', 'access_key'))) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $request->user()->createToken('xigma-token')->plainTextToken;

        return response()->json([
            'user' => $request->user(),
            'token' => $token,
        ]);
    }

    public function adminLogin(Request $request, Admin $admin, AdminLogin $admin_login)
    {

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


        $request->validate([
            'username' => 'required|string',
            'access_key' => 'required|string',
        ]);
        
        $user = Admin::where('name', $request->username)->first();
        if(!$user){
            return response()->json([
                'message' => 'Admin not found',
            ]);
        } else {
            if(Hash::check($request->access_key, $user->access_key)){

                // check if user login expired or not (1 hours)
                $lastLogin = AdminLogin::where('user_id', $user->id)
                        ->latest('created_at')
                        ->first();

                if (!$lastLogin || $lastLogin->created_at->diffInHours(now()) >= 1) {
                    $token = Hash::make('ADMIN_TOKEN_'.$user->id.'_'.$request->userAgent().'_'.$request->ip());

                    $admin_login_new = AdminLogin::create([
                        'user_id' => $user->id,
                        'user_agent' => $request->userAgent(),
                        'client_ip' => $request->ip(),
                        'token' => $token,
                        'created_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
                        'updated_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
                    ]);

                    Cache::put('ACCESS_TOKEN_ADMIN_'.$user->id, $token, now()->addHours(1));
                } else {
                    $token = Hash::make('ADMIN_TOKEN_'.$user->id.'_'.$request->userAgent().'_'.$request->ip());
                    $lastLogin->update([
                        'user_agent' => $request->userAgent(),
                        'client_ip' => $request->ip(),
                        'token' => $token,
                        'updated_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur')
                    ]);
                }

                return response()->json([
                    'status' => 200,
                    'message' => 'Login successful',
                    'token' => $token,
                    'admin' => $user
                ]);
            } else {
                return response()->json([
                    'status' => 401,
                    'message' => 'Invalid credentials',
                ]);
            }
        }
        
        return response()->json([
            'status' => 401,
            'message' => 'Login failed',
            'user' => $user,
        ]);

    }

    public function createAdmin(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'access_key' => 'required|string',
        ]);
        
        $admin = Admin::create([
            'name' => $request->name,
            'access_key' => Hash::make($request->access_key),
            'phone' => '0143012116',
            'phone_prefix' => '+60',
            'created_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
            'updated_at' => Carbon::now()->setTimezone('Asia/Kuala_Lumpur'),
        ]);
        return response()->json(['message' => 'Admin created successfully', 'admin' => $admin]);
    }

    public function verifyToken(Request $request) {
        $latest_token = Cache::get('ACCESS_TOKEN_ADMIN_'.$request->user_id);
        if(!$latest_token){
            // not found - expired and no login
            return response()->json(['status' => 401, 'message' => 'Token not found'], 401);
        } else if (Hash::check($request->token, $latest_token)) {
            return response()->json(['status' => 401, 'message' => 'Token Not verified'], 401);
        } else {
            return response()->json(['status' => 200, 'message' => 'Token verified'], 200);
        }
        
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'Logged out']);
    }
}

