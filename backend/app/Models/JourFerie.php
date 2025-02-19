<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JourFerie extends Model
{

    use HasFactory;

    protected $primaryKey = 'jour_ferie_id';

    protected $fillable = [
        'nom',
        'date',
    ];

    public function retraitDrive()
    {
        return $this->belongsTo(RetraitDrive::class, 'jour_ferie_id');
    }
}