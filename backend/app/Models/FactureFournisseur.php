<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class FactureFournisseur extends Facture
{

    use HasFactory;

    protected $table = 'facture_fournisseurs'; 

    protected $fillable = [
        'datePaiement',
    ];

    public function fournisseur()
    {
        return $this->belongsTo(Fournisseur::class, 'fournisseur_id');
    }
}