<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PeriodeHoraire extends Model
{

    use HasFactory;

    protected $primaryKey = 'periode_horaire_id';

    protected $fillable = [
        'date_debut',
        'date_fin',
    ];
    
    public function horaires()
    {
        return $this->belongsToMany(Horaire::class, 'horaire_periode_horaire', 'periode_horaire_id', 'horaire_id');
    }
}