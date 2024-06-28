<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:users,email', // mail unique
            'password' => 'required|min:6', // au moin 6 caractaire
            'type_user'=> 'required',
        ]);
        $user = User::create([
            'email' => $request->email,
            'type_user'=> $request->type_user,
            'password' => Hash::make($request->password),
        ]);
       // $token = $user->createToken('token-name')->plainTextToken; // zeydaa
        return response()->json([
            'status' => true,
            'message' => 'User Created Successfully',
            'id'=>$user->id
           // 'token' => $token
        ], 200);
    }
}
