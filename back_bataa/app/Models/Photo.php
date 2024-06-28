<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    use HasFactory;
    protected $fillable = [
        'lien_photo','produitID'
    ];
    public function produits() // hethy fonction  : une sous ctegorie appartien a une categorie
    {
        return $this->belongsTo(Produit::class,"produitID"); // une sous ctegorie appartien a une categorie
    }
}
