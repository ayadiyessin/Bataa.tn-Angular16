<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\SousCategorieController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UtilisateurController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\EnchereController;
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware('api')->group(function () {
    Route::resource('categories', CategorieController::class);
});
Route::put('Archivecategorie/{Id}', [CategorieController::class, 'Archivecategorie']);
Route::middleware('api')->group(function () {
    Route::resource('souscategories', SousCategorieController::class);
}); // amelna route le sous categorie
Route::put('ArchiveSouscategorie/{Id}', [SousCategorieController::class, 'ArchiveSouscategorie']);
Route::get('/SousCat/{idcat}',[SousCategorieController::class,'showSCategorieByCAT']);
Route::get('/SousCatNonArchiv/{idcat}',[SousCategorieController::class,'showSCategorieByCAT1']);

Route::middleware('api')->group(function () {
    Route::resource('user', UserController::class);
});
Route::put('valid/{id}', [UserController::class, 'ValiderUser']);// Update route

Route::middleware('api')->group(function () {
    Route::resource('utilisateur', UtilisateurController::class);
});
Route::get('/utilisateurs/{iduser}',[UtilisateurController::class,'showUtilisateurByUser']);

Route::get('AcheteursConfirmer',[UtilisateurController::class,'AcheteursConfirmer']);
Route::get('AcheteurNonConfirmer',[UtilisateurController::class,'AcheteurNonConfirmer']);
Route::get('Vendeurs',[UtilisateurController::class,'Vendeurs']); // ??

Route::middleware('api')->group(function () {
    Route::resource('produit', ProduitController::class);
});
Route::get('/produitbyscat/{idScat}',[ProduitController::class,'showProduitsBySCategorie']);
Route::get('/produitbyuser/{iduser}',[ProduitController::class,'showProduitByUser']);
Route::get('ProduitNonValider',[ProduitController::class,'ProduitNonValider']);
Route::get('ProduitValider',[ProduitController::class,'ProduitValider']);
Route::put('ValiderProduit/{id}', [ProduitController::class, 'ValiderProduit']);
Route::get('verifDateProduit/{Id}', [ProduitController::class, 'verifDateProduit']);
Route::get('getNotifactionCountProd', [ProduitController::class, 'getNotifactionCount']);
Route::get('rechercheProduit/{Id}/{etatProduit}', [ProduitController::class, 'rechercheProduit']);
Route::put('updateEtatVenteProd/{Id}', [ProduitController::class, 'updateEtatVenteProd']);

Route::get('vendeurs', [ProduitController::class, 'vendeurs']);


Route::get('getNotifactionCountUser', [UserController::class, 'getNotifactionCountUser']);
// enchere
Route::get('listeEncherers/{userId}/{produitId}', [EnchereController::class, 'index']);// Index route
Route::get('listeProduitencheresParProd/{produitId}', [EnchereController::class, 'listeProduitencheresParProd']);// liste comentaire
Route::get('listeProduitEncherespaerClient/{userId}', [EnchereController::class, 'listeProduitEncherespaerClient']);// liste comentaire
Route::post('AjoutEnchere/{userId}/{produitId}', [EnchereController::class, 'store']);// Store route
Route::put('updateEnchere/{id}', [EnchereController::class, 'update']);// Update route
Route::delete('delateComEven/{id}', [EnchereController::class, 'destroy']);// Destroy route
//Route::put('updateEnchere/{id}', [EnchereController::class, 'updateEnchere']);// Update route
Route::put('ValiderEnchere/{id}', [EnchereController::class, 'ValiderEnchere']);
Route::get('ProduitVendu/{produitId}', [EnchereController::class, 'ProduitVendu']);
Route::get('ProduitEncours/{produitId}', [EnchereController::class, 'ProduitEncours']); // true ou false
Route::get('listeProduitEncherespaerClientAcheter/{userId}', [EnchereController::class, 'listeProduitEncherespaerClientAcheter']);
Route::get('listeProduitEncherespaerClientValider/{userId}', [EnchereController::class, 'listeProduitEncherespaerClientValider']);
Route::get('listeProduitEncherespaerClientNonValider/{userId}', [EnchereController::class, 'listeProduitEncherespaerClientNonValider']);
Route::get('ProduitsMaxPrixProduits/{produitId}', [EnchereController::class, 'ProduitsMaxPrixProduits']);
Route::get('MaxPrixProduits/{produitId}', [EnchereController::class, 'MaxPrixProduits']);
Route::middleware('api')->group(function () {
    Route::resource('photo', PhotoController::class);
}); // amelna route le sous categorie

Route::get('/photos/{idpro}',[PhotoController::class,'showphotoByProduit']);

Route::post('/login', [LoginController::class, 'login']);
Route::post('/register', [RegisterController::class, 'register']);
Route::middleware('auth:sanctum')->post('/logout', [LoginController::class,'logout']);

Route::get('/countproduitbyscat/{idScat}',[ProduitController::class,'countProduitsBySCategorie']);
Route::get('/produitNonValiderbyscat/{idScat}',[ProduitController::class,'showProduitsNonValiderBySCategorie']);

// dashbord user 2 / utilisateur 1 (vendeur) / 2 categorie / 2 produits / 1 sous categorie
Route::get('/countUserEnAttende',[UserController::class,'countUserEnAttende']);
Route::get('/countUsersValider',[UserController::class,'countUsersValider']);
Route::get('/countCategorieValider',[CategorieController::class,'countCategorieValider']);
Route::get('/countCategorieArchiver',[CategorieController::class,'countCategorieArchiver']);
Route::get('/countSousCatValider',[SousCategorieController::class,'countSousCatValider']);
Route::get('/countProduitEnAttende',[ProduitController::class,'countProduitEnAttende']);
Route::get('countProduitsEnchere',[ProduitController::class,'countProduitsEnchere']);
Route::get('countVendeurEnAttente',[ProduitController::class,'countVendeurEnAttente']);

Route::get('/rechercheParMail/{email}',[UserController::class,'rechercheParMail']);


////////v2
Route::get('/getproduits',[ProduitController::class,'getProduits']);
/////////v2
