<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Categorie::where('Archivecategorie', 0)->get();
        return $categories;

        // $categories = Categorie::all()->toArray(); // tarja3 tableau
        // return array_reverse($categories); // type de retour 1 jeson
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $categorie = new Categorie([
            'nomcategorie' => $request->input('nomcategorie'),
            ]); // sna3na instance w sabina fi wostou
        $categorie->save(); // souvgarde l instance
        return response()->json($categorie, 201); // traja3li el categorie eli ameltelha souvgarde
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $categorie = Categorie::find($id); // Categorie hethy el model
        return response()->json($categorie); // raj3elna json
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $categorie = Categorie::find($id); // nlawej bel model (Categorie)
        $categorie->update($request->all());  // nbadel fi les donner
        return response()->json($categorie, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $categorie = Categorie::find($id); // modele nlawej alih w ki t9ah hothouli fi $categorie
        $categorie->delete(); // efsa5li  $categorie
        return response()->json('Catégorie supprimée !'); //traja3li message khaw
    }
    public function Archivecategorie($id)
    {
        $sousC = Categorie::find($id);
        $sousC->update([
            'Archivecategorie' => 1,
        ]);
        return response()->json($sousC, 200);
    }

        // dashbord
public function countCategorieValider()
{
    $nombreUsers = Categorie::where('Archivecategorie',0)
        ->count();
    $nombreUsersString = str($nombreUsers);

    return response()->json($nombreUsersString);
}
public function countCategorieArchiver()
{
    $nombreUsers = Categorie::where('Archivecategorie',1)
        ->count();
    $nombreUsersString = str($nombreUsers);

    return response()->json($nombreUsersString);
}

// fin dashbord

}
