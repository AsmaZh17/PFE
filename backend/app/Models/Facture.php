<?php

namespace App\Models;

use App\Enums\RoleEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facture extends Model
{
    
    use HasFactory;

    protected $primaryKey = 'facture_id';

    protected $fillable = [
        'date',
        'tva',
        'totalHT',
        'totalTTC',
    ];

    public function calculTTC()
    {
        return $this->totalHT + ($this->totalHT * $this->tva / 100);
    }

    public function detailsFacture()
    {
        return $this->hasMany(DetailFacture::class, 'facture_id');
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($commande) {
            if ($commande->id) {
                $user = User::find($commande->id);
                if (!$user || $user->role !== RoleEnum::FOURNISSEUR ->value) {
                    throw new \Exception("Seuls les utilisateurs ayant le rôle FOURNISSEUR peuvent être assignés.");
                }
            }
        });
    }
}