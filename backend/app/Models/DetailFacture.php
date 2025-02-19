<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailFacture extends Model
{

    use HasFactory;

    protected $table = 'detail_factures';
    protected $primaryKey = 'detail_facture_id';

    protected $fillable = [
        'quantite',
        'prix_unitaire',
        'totalLigneHT',
        'tvaLigne',
        'totalLigneTTC',
    ];

    public function facture()
    {
        return $this->belongsTo(Facture::class, 'facture_id');
    }
}