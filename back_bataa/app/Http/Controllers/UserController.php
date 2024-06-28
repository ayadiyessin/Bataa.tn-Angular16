<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $Users = User::all();
        return $Users;
    }
    public function getNotifactionCountUser()
    {
        $count = User::whereRaw("DATE(created_at) = ?", [now()->toDateString()])
                     ->where('valid_user', 0)
                     ->count();

        if ($count === 0) {
            return 0;
        } else {
            return $count;
        }
    }



    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $User = User::find($id);
        return response()->json($User);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $User = User::find($id);
        $User->update($request->all());
        return response()->json($User, 200);
    }
    public function ValiderUser($id)
    {
        $user = User::find($id);
        $user->update([
            'valid_user' => 1,
        ]);
        $user->save();
        return response()->json($user, 200);
    }
    // dashbord
public function countUsersValider()
{
    $nombreUsers = User::where('type_user',"acheteur")
        ->where('valid_user',1)
        ->count();
    $nombreUsersString = str($nombreUsers);

    return response()->json($nombreUsersString);
}
public function countUserEnAttende()
{
    $nombreUsers = User::where('type_user',"acheteur")
    ->where('valid_user',0)
        ->count();
    $nombreUsersString = str($nombreUsers);

    return response()->json($nombreUsersString);
}


// fin dashbord

public function rechercheParMail($email)
{
    $user = User::where('email', $email)->first(); // Utilisation de minuscules pour les variables, selon les conventions de nommage
    return response()->json($user, 200);
}

}
