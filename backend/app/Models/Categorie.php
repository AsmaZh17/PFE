<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    
    use HasFactory;

    protected $table = 'categories';
    protected $primaryKey = 'categorie_id';

    protected $fillable = [
        'titre',
        'image',
        'rang',
    ];

    public function sousCategories()
    {
        return $this->hasMany(SousCategorie::class, 'categorie_id');
    }
}