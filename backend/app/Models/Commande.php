<?php

namespace App\Models;

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

    public function panier()
    {
        return $this->belongsTo(Panier::class, 'panier_id');
    }

    public function codePromotion()
    {
        return $this->belongsTo(CodePromotion::class, 'code_promotion_id');
    }

    public function livraison()
    {
        return $this->hasOne(Livraison::class, 'commande_id');
    }

    public function retraitDrive()
    {
        return $this->hasOne(RetraitDrive::class, 'commande_id');
    }

    public function factureCommande()
    {
        return $this->hasOne(Facture::class, 'commande_id');
    }
}