<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enchere extends Model
{
    use HasFactory;
    protected $fillable = [
        'conf',
        'prix_vente',
        'produitID',
        'utilisateurID'
    ];
    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class, 'utilisateurID');
    }

    public function produit()
    {
        return $this->belongsTo(Produit::class, 'produitID');
    }
}
