<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FactureFournisseur extends Model
{

    use HasFactory;

    protected $fillable = [
        'fournisseur_id',
        'facture_id',
        'datePaiement',
    ];

    public function fournisseur()
    {
        return $this->hasOne(Fournisseur::class);
    }

    public function facture()
    {
        return $this->belongsTo(Facture::class);
    }
}