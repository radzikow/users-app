<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    // -------------------
    // register user
    public function register(Request $request)
    {
        $request->validate([
            'firstname' => 'required|string|min:3',
            'lastname' => 'required|string|min:3',
            'email' => 'required|string',
            'password' => 'required|confirmed|min:4|string',
            'type' => 'required|string',
            'status' => 'required',
        ]);

        $user = new User();
        $user->firstname = $request->firstname;
        $user->lastname = $request->lastname;
        $user->email = $request->email;
        $user->type = $request->type;
        $user->status = $request->status;
        $user->password = Hash::make($request->password);

        if (!$user->save()) {
            return response([
                'message' => 'Error occured while registering a new user.'
            ], 400)
                ->header('Content-Type', 'text/plain');
        }

        return response([
            'message' => 'User created successfully.',
            'user' => $user,
        ], 201);
    }

    // -------------------
    // register lecturer
    public function registerLecturer(Request $request)
    {
        $request->validate([
            'id' => 'required|numeric',
            'phone' => 'required',
            'education' => 'required|string',
            'status' => 'required|numeric',
        ]);

        $lecturer = User::find($request->id);

        $lecturer->update([
            'status' => $request->status,
        ]);

        $lecturer->phone = $request->phone;
        $lecturer->education = $request->education;

        if (!$lecturer->save()) {
            return response([
                'message' => 'Error occured while registering a new leturer.'
            ], 400)
                ->header('Content-Type', 'text/plain');
        }

        return response([
            'message' => 'Lecturer created successfully.',
            'lecturer' => $lecturer,
        ], 201);
    }

    // -------------------
    // register administrative
    public function registerAdministrative(Request $request)
    {
        $request->validate([
            'id' => 'required|numeric',
            'homeAddress' => 'required',
            'contactAddress' => 'required',
            'status' => 'required|numeric',
        ]);

        $administrative = User::find($request->id);

        $administrative->update([
            'status' => $request->status,
        ]);

        $administrative->home_address = $request->homeAddress;
        $administrative->contact_address = $request->contactAddress;

        if (!$administrative->save()) {
            return response([
                'message' => 'Error occured while registering a new administrative.'
            ], 400)
                ->header('Content-Type', 'text/plain');
        }

        return response([
            'message' => 'Administrative created successfully.',
            'administrative' => $administrative,
        ], 201);
    }
}
