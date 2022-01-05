<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();

        $data['password'] = Hash::make($data['password']);

        $res = User::where('email', $data["email"])->first();

        if ($res){
            return response(['message' => 'Пользователь с таким email зарегистрирован'], 403);
        }

        $res = User::create($data);

        $token = auth()->tokenById($res->id);

        return response(['token' => $token]);
    }
}
