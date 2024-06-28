<?php

namespace App\Http\Controllers;

use App\Models\Enchere;
use App\Models\Utilisateur;
use Illuminate\Http\Request;

class EnchereController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($userId, $produitId)
    {
        $encheres = Enchere::where('utilisateurID', $userId)->where('produitID', $produitId)->get();//->pluck('enchere_Event')
        return $encheres;
    }

    public function listeProduitencheresParProd($produitId)
    {
        $encheres = Enchere::where('produitID', $produitId)
                            ->with(['produit', 'utilisateur'])
                            ->orderBy('updated_at', 'desc')
                            ->get();

        return $encheres;
    }
    public function listeProduitEncherespaerClient($userId)
    {
        $encheres = Enchere::where('utilisateurID', $userId)->orderBy('updated_at', 'asc')->get();//->pluck('enchere_Event')
        return $encheres;
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request,$userId, $produitId)
    {
        $enchere = new Enchere([
            'produitID' => $produitId,
            'utilisateurID' => $userId,
            'prix_vente' => $request->input('prix_vente'),
            ]);
            $enchere->save();
            return response()->json($enchere,201);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $enchere = Enchere::find($id);
        //$enchere->update($request->all());
        $enchere->update([
            'prix_vente' => $request->input('prix_vente'),
        ]);
        $enchere->touch(); // bech tbedeli update_at
        return response()->json($enchere,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $enchere = Enchere::find($id); // . find => nlawej alih
        $enchere->delete();
        return response()->json('enchere supprimée !');
    }
    public function ValiderEnchere($id)
    {
        $encher = Enchere::find($id);
        $encher->update([
            'conf' => 1,
        ]);
        $encher->save();
        return response()->json($encher, 200);
    }
    public function ProduitVendu($produitId)
{
    $encheres = Enchere::where('produitID', $produitId)
                       ->where('conf', 1)
                       ->get();
    return $encheres;
}
public function ProduitEncours($produitId)
{
    $encheres_encours = Enchere::where('produitID', $produitId)
                                ->where('conf', 0)
                                ->exists();

    $encheres_confirmees = Enchere::where('produitID', $produitId)
                                   ->where('conf', 1)
                                   ->exists();

    return $encheres_encours && !$encheres_confirmees;
} // traja3 true ken ma azelet en cours

public function listeProduitEncherespaerClientAcheter($userId)
    {
        $encheres = Enchere::where('utilisateurID', $userId)
                        ->with('produit') // Charger la relation produit
                        //->where('conf', 1)
                        ->orderBy('updated_at', 'asc')
                        ->get();

        return $encheres;
    }
    public function listeProduitEncherespaerClientValider($userId)
    {
        $encheres = Enchere::where('utilisateurID', $userId)
                        ->with('produit') // Charger la relation produit
                        ->where('conf', 1)
                        ->orderBy('updated_at', 'asc')
                        ->get();

        return $encheres;
    }
    public function listeProduitEncherespaerClientNonValider($userId)
    {
        $encheres = Enchere::where('utilisateurID', $userId)
                        ->with('produit') // Charger la relation produit
                        ->where('conf', 0)
                        ->orderBy('updated_at', 'asc')
                        ->get();

        return $encheres;
    }
    public function MaxPrixProduits($produitId)
    {
        $maxPrixVente = Enchere::where('produitID', $produitId)->max('prix_vente');
        if ($maxPrixVente === null) {
            return 0;
        }
        return $maxPrixVente;
    }
    public function ProduitsMaxPrixProduits($produitId)
{
    // Rechercher l'enchère avec le prix de vente maximum pour le produit spécifié
    $enchere = Enchere::where('produitID', $produitId)->with('produit')
                      ->orderBy('prix_vente', 'desc') // Ordonner par prix_vente descendant
                      ->first(); // Récupérer la première (la plus élevée) enchère



    return $enchere; // Retourner toute l'enchère avec le prix de vente maximum
}


}
