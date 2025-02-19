<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facture extends Model
{
    
    use HasFactory;

    protected $fillable = [
        'date',
        'tva',
        'totalHT',
        'totalTTC',
    ];

    public function factureCommandes()
    {
        return $this->hasMany(FactureCommande::class);
    }

    public function factureFournisseurs()
    {
        return $this->hasMany(FactureFournisseur::class);
    }
}