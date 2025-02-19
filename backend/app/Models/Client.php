<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $table = 'clients';
    protected $primaryKey = 'client_id';

    protected $fillable = [
        'user_id',
        'adresse',
        'region',
        'ville',
        'compositionFoyer',
        'typeLogement',
        'statusLogement'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}