<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fournisseur extends Model
{
    use HasFactory;

    protected $table = 'fournisseurs';
    protected $primaryKey = 'fournisseur_id';

    protected $fillable = ['user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function factureFournisseurs()
    {
        return $this->hasMany(FactureFournisseur::class);
    }
}