<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JourFerie extends Model
{

    use HasFactory;

    protected $primaryKey = 'JourFerie_id';

    protected $fillable = [
        'nom',
        'date',
    ];

    public function retraitDrive()
    {
        return $this->belongsTo(RetraitDrive::class, 'JourFerie_id');
    }
}