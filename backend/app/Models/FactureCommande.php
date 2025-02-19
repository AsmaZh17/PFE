<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class FactureCommande extends Facture
{
    
    use HasFactory;

    protected $table = 'facture_commandes'; 

    protected $fillable = [
        'remise',
    ];

    public function commande()
    {
        return $this->belongsTo(Commande::class, 'commande_id'); 
    }

    public function totalApresRemise()
    {
        return $this->totalTTC - $this->remise;
    }
}
