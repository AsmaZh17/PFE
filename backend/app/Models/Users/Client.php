<?php

namespace App\Models\Users;

use App\Models\Panier;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $table = 'clients';
    protected $primaryKey = 'client_id';

    protected $fillable = [
        'id',
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

    public function panier()
    {
        return $this->hasOne(Panier::class, 'id');
    }

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($client) {
            $client->panier()->delete();
        });
    }
}