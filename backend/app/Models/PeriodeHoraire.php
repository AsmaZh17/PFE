<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PeriodeHoraire extends Model
{

    use HasFactory;

    protected $fillable = [
        'periode_horaire_id',
        'date_debut',
        'date_fin',
    ];

    public function horaire()
    {
        return $this->hasOne(Horaire::class);
    }
}