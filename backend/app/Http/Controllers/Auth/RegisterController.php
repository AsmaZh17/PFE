<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request){
        
        $validate = $request->validate([
            'nom' => 'required|max:255',
            'prenom' => 'required|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
            'telephone' => 'string',
            'genre' => 'string',
            'date_naissance' => 'string'
        ]);

        $validate['password'] = Hash::make($validate['password']);

        $user = User::create( $validate );
        
        $token = $user->createToken($user->nom.' '.$user->prenom);
        //$token = $user->createToken($user->name);

        return [
            'user' => $user,
            'token' => $token->plainTextToken
        ];
    }
}
