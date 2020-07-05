<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Artisan;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    // -----------------------
    // Get all users
    // -----------------------
    public function getUsers()
    {
        $users = User::all();

        return response()->json(['users' => $users], 200);
    }

    // -----------------------
    // Generate users
    // -----------------------
    public function generateUsers()
    {
        Artisan::call('db:seed', ['--class' => 'UserSeeder']);
        return response()->json(['msg' => 'Users generated.'], 200);
    }

    // -----------------------
    // Get user by id
    // -----------------------
    public function getUser(Request $request, $id)
    {
        $user = User::find($id);

        // http status: 200 OK
        return response()->json(['user' => $user], 200);
    }

    // -----------------------
    // Edit product
    // -----------------------
    public function putUser(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            // http status: 404 Not Found
            return response()->json(['message' => 'User not found'], 404);
        }

        // $user->name = $request->input('name');
        // $user->description = $request->input('description');
        // $user->price = $request->input('price');
        // $user->status = $request->input('status');

        $user->save();

        return response()->json(['user' => $user], 200);
    }

    // -----------------------
    // Delete user
    // -----------------------
    public function deleteUser($id)
    {
        $user = User::find($id);
        $user->delete();

        // http status: 200 OK
        return response()->json(['message' => 'User deleted.'], 200);
    }
}
