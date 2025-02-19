<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    
    use HasFactory;

    protected $table = 'produits';
    protected $primaryKey = 'produit_id';

    protected $fillable = [
        'marque_id',
        'sous_categorie_id',
        'promotion_id',
        'nom',
        'status',
        'description',
        'prix',
        'image',
    ];

    public function sousCategorie()
    {
        return $this->belongsTo(SousCategorie::class, 'sous_categorie_id');
    }

    public function marque()
    {
        return $this->belongsTo(Marque::class, 'marque_id');
    }

    public function promotion()
    {
        return $this->belongsTo(Promotion::class, 'promotion_id');
    }
}