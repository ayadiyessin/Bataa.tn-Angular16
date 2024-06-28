<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    use HasFactory;
    protected $fillable = [
        'etat_vente','valide_produit','date_expiration','prix_unitaire','etat_produit','description','nom','scategorieID',"utilisateurID"
    ];
    public function photos()
    {
        return $this->hasMany(Photo::class ,"produitID"); //une categorie contien plusieur sous categorie
    }
    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class,"utilisateurID");
    }
    public function utilisateurs()
    {
        return $this->belongsToMany(Utilisateur::class);
    }
    public function SousCategories() // hethy fonction  : une sous ctegorie appartien a une categorie
    {
        return $this->belongsTo(SousCategorie::class,"scategorieID"); // une sous ctegorie appartien a une categorie
    }
}
