<?php

namespace App\Http\Controllers;

use App\Models\Produit;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ProduitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $produits = Produit::with(['SousCategories','Utilisateur'])->get();
        return $produits;
    }
    public function rechercheProduit($idScat,$etatProduit) //$prixMin = null, $prixMax = null,
    {
        // Commence par récupérer tous les produits
        $dateSysteme = now()->toDateString();
        $query = Produit::where('scategorieID', $idScat)->with(['SousCategories', 'Utilisateur'])
        ->where('valide_produit',1)
        ->where('etat_vente', 0)
        ->whereDate('date_expiration', '>', $dateSysteme)
        ->where('etat_produit', $etatProduit);



        $produits = $query->get();

        return $produits;
    }


    public function getNotifactionCount()
    {
        $count = Produit::whereRaw("DATE(created_at) = ?", [now()->toDateString()])
                    ->where('valide_produit', 0)
                     ->count();

        if ($count === 0) {
            return 0;
        } else {
            return $count;
        }
    }




    public function vendeurs()
    {
        $produits = Produit::with(['utilisateur'])
                           ->orderBy('utilisateurID') // Assurez-vous que les produits sont triés par utilisateur_id
                           ->get()
                           //->where('valide_produit', 1)
                           ->groupBy('utilisateurID')
                           ->map(function ($group) {
                               return $group->first();
                           })
                           ->values();

        return $produits;
    }





    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $produit = new Produit([
            'nom' => $request->input('nom'),
            'etat_produit' => $request->input('etat_produit'),
            'description' => $request->input('description'),
            'date_expiration' => $request->input('date_expiration'),
            'prix_unitaire' => $request->input('prix_unitaire'),
            'scategorieID' => $request->input('scategorieID'),
            'utilisateurID' => $request->input('utilisateurID'),
            ]); // sna3na instance w sabina fi wostou
        $produit->save(); // souvgarde l instance
        return response()->json([
            'id'=>$produit->id
           // 'token' => $token
        ], 200);
        // return response()->json($produit, 201); // traja3li el produit eli ameltelha souvgarde
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $produit = Produit::with('SousCategories')->find($id);

        //$produit = Produit::with(['SousCategories'])::find($id); // produit hethy el model
        return response()->json($produit); // raj3elna json
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $produit = Produit::find($id); // nlawej bel model (produit)
        $produit->update($request->all());  // nbadel fi les donner
        return response()->json($produit, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $produit = Produit::find($id); // modele nlawej alih w ki t9ah hothouli fi $produit
        $produit->delete(); // efsa5li  $produit
        return response()->json('Produit supprimée !'); //traja3li message khaw
    }
    public function updateEtatVenteProd($id)
    {
        $sousC = Produit::find($id);
        $sousC->update([
            'etat_vente' => 1,
        ]);
        return response()->json($sousC, 200);
    }
    public function showProduitsBySCategorie($idScat) // bech traja3li tous les sous categories mta categorie ili id mte3ou $idcat
    {
        $Produits= Produit::where('scategorieID', $idScat)->with('SousCategories')->get(); // brch trja3li resultaa fi  $Scategorie bech tmchy ll Scategorie w tlawej fi
                    //attribue categorieID  ala valeur $idcat w trja3houli w bad ametlou ->with 5ater 9otlou rajali l'objet kolou ( yani ma hachtich ken bel case heki hachty bel les attribue mte3ou lkol yani l'objet kemel )
        return response()->json($Produits);
    }

    public function showProduitByUser($iduser) // ??
    {
        $produit = Produit::where('utilisateurID', $iduser)->with(['SousCategories','Utilisateur'])->orderBy('created_at', 'desc')->get();
        if ($produit->isEmpty()) {
            return response()->json(0);
        }
        return response()->json($produit);
    }

    public function ProduitValider()
    {
        $produits = Produit::with(['SousCategories', 'Utilisateur'])
                   ->where('valide_produit', 1)
                   ->get();
        return $produits;

    }
    public function ProduitNonValider()
    {
        $produits = Produit::with(['SousCategories', 'Utilisateur'])
                   ->where('valide_produit', 0)
                   ->orderBy('created_at', 'desc')
                   ->get();
        return $produits;

    }
    public function ValiderProduit($id)
        {
            $produit = Produit::find($id);
            $produit->update([
                'valide_produit' => 1,
            ]);
            $produit->save();
            return response()->json($produit, 200);
        }


    public function verifDateProduit($id)
    {
        $aujourdhui = Carbon::now();

        $produit = Produit::where('id', $id)
                        ->where('date_expiration', '>', $aujourdhui)
                        ->exists();

        return response()->json(['existe' => $produit]);
    }
    public function countProduitsBySCategorie($idScat)
{
    $dateSysteme = now()->toDateString();
    $nombreProduits = Produit::where('scategorieID', $idScat)
        ->where('etat_vente', 0)
        ->where('valide_produit', 1)
        ->whereDate('date_expiration', '>', $dateSysteme)
        ->count();
    $nombreProduitsString = str($nombreProduits);

    return response()->json($nombreProduitsString);
}

public function showProduitsNonValiderBySCategorie($idScat)
{
    $dateSysteme = now()->toDateString();
    $Produits = Produit::where('scategorieID', $idScat)
        ->where('etat_vente', 0)
        ->where('valide_produit', 1)
        ->whereDate('date_expiration', '>', $dateSysteme)
        ->with('sousCategories')
        ->get();

    return response()->json($Produits);
}
// dashbord
public function countProduitsEnchere()
{
    $dateSysteme = now()->toDateString();
    $nombreProduits = Produit::where('valide_produit',1)
    //->where('etat_vente', 0)
        ->whereDate('date_expiration', '>', $dateSysteme)
        ->count();
    $nombreProduitsString = str($nombreProduits);

    return response()->json($nombreProduitsString);
}
public function countProduitEnAttende()
{
    $nombreProduits = Produit::where('valide_produit', 0)
        ->count();
    $nombreProduitsString = str($nombreProduits);

    return response()->json($nombreProduitsString);
}
public function countVendeurEnAttente()
{
    $nombreVendeurs = Produit::distinct('utilisateurID')->count();

    // Vérifier si le nombre de vendeurs est égal à zéro
    if ($nombreVendeurs == 0) {
        return 0;
    }

    // Retourner le nombre de vendeurs s'il est différent de zéro
    return $nombreVendeurs;
}

//////////////////////v2
public function getProduits()
{
    $dateSysteme = now()->toDateString();
    $produits = Produit::where('valide_produit', 1)
    ->where('etat_vente', 0)
    ->whereDate('date_expiration', '>', $dateSysteme)
    ->with(['SousCategories','Utilisateur'])
    ->get();
    return $produits;
}


/////////////////////v2


// fin dashbord
}
