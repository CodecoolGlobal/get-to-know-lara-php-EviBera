<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Mockery\Exception;
use Illuminate\Support\Facades\Log;

class RegistrationController extends Controller
{
    public function register(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|max:255',
                'email' => 'required|email|unique:users',
                'password' => 'required|min:4',
            ]);

            $user = User::create([
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'password' => Hash::make($validatedData['password']),
            ]);

            return response()->json(['message' => 'User registered successfully!'], 201);

        } catch (Exception $exception){
            Log::error('Registration error: ' . $exception->getMessage());
            return response()->json(['error' => 'Registration failed'], 500);
        }
    }
}
