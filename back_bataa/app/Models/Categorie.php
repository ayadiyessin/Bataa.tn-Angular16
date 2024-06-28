<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    protected $fillable = [
        'nomcategorie','Archivecategorie'
    ];
    use HasFactory;
    public function SousCategories()
    {
        return $this->hasMany(SousCategorie::class ,"categorieID"); //une categorie contien plusieur sous categorie
    }
}
