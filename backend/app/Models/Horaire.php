<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Horaire extends Model
{

    use HasFactory;

    protected $fillable = [
        'horaire_id',
        'jour',
        'ouvert',
    ];

    public function retraitDrive()
    {
        return $this->hasOne(RetraitDrive::class);
    }
}