<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function paginate()
    {
        $users = User::orderBy('username', 'ASC')
            ->paginate(request('limit', 5));

        if (request()->all()) {
            $users->appends(request()->all());
        }

        return response()->json($users);
    }

    public function view()
    {
        return view('user.view');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'username' => 'required|string|unique:users,username|max:30',
            'fullname' => 'required|string|max:50',
            'city'  => 'required|string',
            'status' => 'required|string|sometimes',
        ]);

        $user = User::create([
            'username' => $request->username,
            'fullname' => $request->fullname,
            'city' => $request->city,
            'status' => $request->status,
            'password' => bcrypt(str_random()),
        ]);

        return response()->json($user);
    }

    public function getData(){
        
    }
    
}
