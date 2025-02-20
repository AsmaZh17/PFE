<?php

namespace App\Models;

use App\Models\Users\User;
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
        return $this->belongsTo(User::class, 'id');
    }

    public function produits()
    {
        return $this->belongsToMany(Produit::class, 'panier_produit', 'panier_id', 'produit_id')
                ->withPivot('quantite') 
                ->withTimestamps();
    }

}