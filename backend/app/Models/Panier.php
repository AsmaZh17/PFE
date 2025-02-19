<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Panier extends Model
{

    use HasFactory;

    protected $table = 'paniers';
    protected $primaryKey = 'panier_id';

    protected $fillable = [
        'client_id',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    public function commandes()
    {
        return $this->hasOne(Commande::class, 'panier_id');
    }

    public function produits()
    {
        return $this->hasMany(Produit::class, 'panier_id');
    }
    
}