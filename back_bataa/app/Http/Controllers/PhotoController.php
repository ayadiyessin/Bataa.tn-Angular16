<?php

namespace App\Http\Controllers;

use App\Models\Photo;
use Illuminate\Http\Request;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $photos = Photo::with('produits')->get(); // bech tjib sous categorie + categorie   heka aleh amlin el with yani bech namel relation bin sous categorie w categorie
        return $photos;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $photo = new Photo([
            'lien_photo' => $request->input('lien_photo'),
            'produitID' => $request->input('produitID'),
        ]);
        $photo->save();
        return response()->json($photo, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $photo = Photo::find($id);
        return response()->json($photo);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $photo = Photo::find($id); // model houwa eli yamel el  find  ( ylawej al id )
        $photo->update($request->all()); // update ll objet eli 9itou bel les valeur eli fi wost el request
        return response()->json($photo, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $photo = Photo::find($id); // . find => nlawej alih
        $photo->delete();
        return response()->json('photo supprimée !');
    }
    public function showphotoByProduit($idpro) // bech traja3li tous les sous categories mta categorie ili id mte3ou $idcat
    {
        $photos = Photo::where('produitID', $idpro)->pluck('lien_photo');
        return response()->json($photos);

    }
}
