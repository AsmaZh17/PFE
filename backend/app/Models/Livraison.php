<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Livraison extends Model
{

    use HasFactory;

    protected $table = 'livraisons';
    protected $primaryKey = 'livraison_id';

    protected $fillable = [
        'commande_id',
        'livreur_id',
        'date',
        'etatLivraison',
    ];

    public function commande()
    {
        return $this->belongsTo(Commande::class, 'commande_id');
    }

    public function livreur()
    {
        return $this->hasOne(Livreur::class, 'livreur_id');
    }
}