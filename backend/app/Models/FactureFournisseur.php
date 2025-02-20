<?php

namespace App\Models;

use App\Enums\RoleEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FactureFournisseur extends Model
{
    use HasFactory;

    protected $primaryKey = 'facture_id';
    protected $table = 'factures'; 

    protected $fillable = [
        'date',
        'tva',
        'totalHT',
        'totalTTC',
        'dtype',
        'fournisseur_id'
    ];

    public function fournisseur()
    {
        return $this->belongsTo(Fournisseur::class);
    }

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

        static::creating(function ($factureFournisseur) {
            $user = User::find($factureFournisseur->fournisseur_id);            
            if ($user && $user->role !== RoleEnum::FOURNISSEUR) {
                throw new \Exception("Seuls les utilisateurs ayant le rôle FOURNISSEUR peuvent être assignés.");
            }
        });
    }
}
