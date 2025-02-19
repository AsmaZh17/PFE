<?php

namespace App\Models;

use App\Enums\EtatLivraisonEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Livraison extends Commande
{

    use HasFactory;

    protected $table = 'livraisons';

    protected $fillable = [
        'date',
        'etatLivraison',
    ];

    protected $casts = [
        'etatLivraison' => EtatLivraisonEnum::class,
    ];

    public function commande()
    {
        return $this->belongsTo(Commande::class, 'commande_id');
    }

    public function livreur()
    {
        return $this->belongsTo(User::class, 'id');
    }
}