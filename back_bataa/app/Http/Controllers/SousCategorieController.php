<?php

namespace App\Http\Controllers;

use App\Models\SousCategorie;
use Illuminate\Http\Request;

class SousCategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $scategories = SousCategorie::where('ArchiveSouscategorie', 0)->with('categories')->get();
        return $scategories;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $scategorie = new SousCategorie([
            'nomscategorie' => $request->input('nomscategorie'), // bech natih nomscategoriebel input
            'categorieID' => $request->input('categorieID'),
        ]);
        $scategorie->save();
        return response()->json($scategorie, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $scategorie = SousCategorie::find($id);
        return response()->json($scategorie);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $scategorie = SousCategorie::find($id); // model houwa eli yamel el  find  ( ylawej al id )
        $scategorie->update($request->all()); // update ll objet eli 9itou bel les valeur eli fi wost el request
        return response()->json($scategorie, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $scategorie = SousCategorie::find($id); // . find => nlawej alih
        $scategorie->delete();
        return response()->json('Scategorie supprimée !');
    }
    public function showSCategorieByCAT($idcat) // bech traja3li tous les sous categories mta categorie ili id mte3ou $idcat
    {
        $Scategorie= SousCategorie::where('categorieID', $idcat)->with('categories')->get(); // brch trja3li resultaa fi  $Scategorie bech tmchy ll Scategorie w tlawej fi
                    //attribue categorieID  ala valeur $idcat w trja3houli w bad ametlou ->with 5ater 9otlou rajali l'objet kolou ( yani ma hachtich ken bel case heki hachty bel les attribue mte3ou lkol yani l'objet kemel )
        return response()->json($Scategorie);
    }
    public function showSCategorieByCAT1($idcat)
        {
            $Scategorie = SousCategorie::where('categorieID', $idcat)
                                    ->where('ArchiveSouscategorie', 0) // Ajout de la condition archivesoucar = 0
                                    ->with('categories')
                                    ->get();
            return response()->json($Scategorie);
        }
    public function ArchiveSouscategorie($id)
    {
        $sousC = SousCategorie::find($id);
        $sousC->update([
            'ArchiveSouscategorie' => 1,
        ]);
        $sousC->save();
        return response()->json($sousC, 200);
    }
    //dachbord
    public function countSousCatValider()
    {
        $nombreUsers = SousCategorie::where('ArchiveSouscategorie',0)
            ->count();
        $nombreUsersString = str($nombreUsers);

        return response()->json($nombreUsersString);
    }

    //fin dashbord
}
