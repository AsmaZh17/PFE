<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class RetraitDrive extends Commande
{

    use HasFactory;

    protected $table = 'retrait_drives';

    protected $fillable = [
        'horaireRetrait',
    ];

    public function commande()
    {
        return $this->belongsTo(Commande::class, 'commande_id');
    }
    
    public function JourFerier()
    {
        return $this->hasMany(JourFerie::class, 'JourFerie_id');
    }

    public function Horaire()
    {
        return $this->hasMany(Horaire::class, 'horaire_id');
    }
}
