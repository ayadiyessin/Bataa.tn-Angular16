<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SousCategorie extends Model
{
    use HasFactory;
    protected $fillable = [
        'nomscategorie','categorieID','ArchiveSouscategorie'
    ];
    public function categories() // hethy fonction  : une sous ctegorie appartien a une categorie
    {
        return $this->belongsTo(Categorie::class,"categorieID"); // une sous ctegorie appartien a une categorie
    }
    public function Produits()
    {
        return $this->hasMany(Produit::class ,"scategorieID"); //une categorie contien plusieur sous categorie
    }
}
