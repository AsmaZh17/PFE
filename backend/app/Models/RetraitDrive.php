<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RetraitDrive extends Model
{

    use HasFactory;

    protected $table = 'retrait_drives';
    protected $primaryKey = 'retrait_drive_id';

    protected $fillable = [
        'commande_id',
        'horaireRetrait',
    ];

    public function commande()
    {
        return $this->belongsTo(Commande::class, 'commande_id');
    }
    
    public function JourFerier()
    {
        return $this->hasMany(JourFerie::class, 'horaireRetrait');
    }

    public function Horaire()
    {
        return $this->hasMany(Horaire::class, 'horaireRetrait');
    }
}
