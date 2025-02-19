<?php

namespace App\Models;

use App\Enums\EtatCommandeEnum;
use App\Enums\ModeLivraisonEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{

    use HasFactory;

    protected $table = 'commandes';
    protected $primaryKey = 'commande_id';

    protected $fillable = [
        'panier_id',
        'code_promotion_id',
        'total',
        'etatCommande',
        'date',
        'modeLivraison',
    ];

    protected $casts = [
        'modeLivraison' => ModeLivraisonEnum::class,
        'etatCommande' => EtatCommandeEnum::class,
    ];

    public function panier()
    {
        return $this->belongsTo(Panier::class, 'panier_id');
    }

    public function codePromotion()
    {
        return $this->belongsTo(CodePromotion::class, 'code_promotion_id');
    }

    public function factureCommande()
    {
        return $this->hasOne(FactureCommande::class, 'commande_id');
    }
}