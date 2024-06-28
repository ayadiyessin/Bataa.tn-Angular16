<?php

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use Illuminate\Http\Request;

class UtilisateurController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $utilisateur = Utilisateur::whereHas('user', function ($query) {
            $query->where('valid_user', 0);
        })->get();
        return $utilisateur;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = new Utilisateur([
            'nom_user' => $request->input('nom_user'),
            'prenom_user' => $request->input('prenom_user'),
            'telephone_user' => $request->input('telephone_user'),
            'adresse_user' => $request->input('adresse_user'),
            'ville_user' => $request->input('ville_user'),
            'image_user' => $request->input('image_user'),
            'userID' => $request->input('userID'),
            ]);
            $user->save();
            return response()->json($user,201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = Utilisateur::with('user')->find($id);
        return response()->json($user);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user = Utilisateur::find($id);
        $user->update($request->all());
        return response()->json($user,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = Utilisateur::find($id); // . find => nlawej alih
        $user->delete();
        return response()->json('user supprimée !');
    }
    // public function showUtilisateurByUser($iduser)
    // {
    //     $user= Utilisateur::where('userID', $iduser)->with('user')->get();
    //     return response()->json($user);
    // }
    public function showUtilisateurByUser($iduser)
    {
        $user = Utilisateur::where('userID', $iduser)->with('user')->first();
        return response()->json($user);
    }

    public function AcheteursConfirmer()
    {
        $users = Utilisateur::with('user')->whereHas('user', function($query) {
            $query->where('valid_user', 1);
        })->get();

        return $users;
    }
    public function AcheteurNonConfirmer()
    {
        $users = Utilisateur::with('user')->whereHas('user', function($query) {
            $query->where('valid_user', 0);
        })->get();

        return $users;

    }
    // public function AcheteursConfirmer() //
    // {
    //     $users = Utilisateur::with('user')->whereHas('user', function($query) {
    //         $query->where('valid_user', 1)
    //               ->where('type_user', 'acheteur');
    //     })->get();

    //     return $users;
    // }
//     public function AcheteurNonConfirmer() //
// {
//     $users = Utilisateur::with('user')->whereHas('user', function($query) {
//         $query->where('valid_user', 0)
//               ->where('type_user', 'acheteur');
//     })->get();

//     return $users;
// }

// public function Vendeurs() //
// {
//     $users = Utilisateur::with('user')->whereHas('user', function($query) {
//         $query->where('type_user', 'vendeur');

//     })->get();

//     return $users;
// }

    public function Vendeurs()
    {
        $vendeurs = Utilisateur::whereHas('Produits.utilisateurID')->distinct()->get();

        return $vendeurs;

    }
    //dachbord
    



    //fin dashbord


}
