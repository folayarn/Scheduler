<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\User;

class AuthController extends Controller
{

    public function signup( Request $request){
$this->validate($request,[
"name"=>"required|string",
"email"=>"email|required|unique:users",
"password"=>"required|min:8|confirmed"
]);
 $user =new User([
"name"=>$request->name,
"email"=>$request->email,
"password"=>bcrypt($request->password)
 ]);
 $user->save();
$token=$user->createToken('token')->accessToken;
 return response()->json(['user'=>$user, 'token'=>$token]);
    }

public function Login(Request $request)
{
$credential= $request->validate([
"email"=>"required|string|email",
"password"=>"required"
]);

if(auth()->attempt($credential)){
    $user=auth()->user()->createToken('token')->accessToken;
    return response()->json([
        'user'=>auth()->user(),
    "token"=>$user
    ]);
}else{
return response()->json(['message'=>'unauthorised'],401);

}

}

}
