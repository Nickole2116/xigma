<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Log;
use Str;

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
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $request->user()->createToken('xigma-token')->plainTextToken;

        return response()->json([
            'user' => $request->user(),
            'token' => $token,
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'Logged out']);
    }
}

