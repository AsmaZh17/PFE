<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Livreur extends Model
{
    use HasFactory;

    protected $table = 'livreurs';
    protected $primaryKey = 'livreur_id';

    protected $fillable = ['user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
