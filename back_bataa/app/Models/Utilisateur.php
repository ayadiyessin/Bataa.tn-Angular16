<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Utilisateur extends Model
{
    use HasFactory;
    protected $fillable = [
        'telephone_user','prenom_user','nom_user','ville_user','adresse_user','image_user','userID'
    ];
    public function user()
    {
        return $this->belongsTo(User::class,"userID");
    }
    public function Produits()
    {
        return $this->hasMany(Produit::class ,"utilisateurID"); //une categorie contien plusieur sous categorie
    }
    public function produit()
    {
        return $this->belongsToMany(Produit::class);
    }
}
