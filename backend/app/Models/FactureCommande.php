<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FactureCommande extends Model
{
    
    use HasFactory;

    protected $fillable = [
        'commande_id',
        'facture_id',
        'remise',
    ];

    public function commande()
    {
        return $this->belongsTo(Commande::class);
    }

    public function facture()
    {
        return $this->belongsTo(Facture::class);
    }
}
