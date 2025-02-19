<?php

namespace App\Models;

use App\Enums\JourEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Horaire extends Model
{

    use HasFactory;

    protected $primaryKey = 'horaire_id';

    protected $fillable = [
        'jour',
        'ouvert',
    ];

    protected $casts = [
        'jour' => JourEnum::class
    ];

    public function retraitDrive()
    {
        return $this->belongsTo(RetraitDrive::class, 'horaire_id');
    }

    public function periodesHoraires()
    {
        return $this->belongsToMany(PeriodeHoraire::class, 'horaire_periode_horaire', 'horaire_id', 'periode_horaire_id');
    }
}