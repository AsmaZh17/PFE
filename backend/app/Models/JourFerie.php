<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JourFerie extends Model
{

    use HasFactory;

    protected $fillable = [
        'JourFerie_id',
        'nom',
        'date',
    ];

    public function retraitDrive()
    {
        return $this->hasOne(RetraitDrive::class);
    }
}