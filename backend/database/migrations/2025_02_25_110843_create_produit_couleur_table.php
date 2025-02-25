<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('produit_couleur', function (Blueprint $table) {
            $table->bigIncrements('id'); // Ajoute un ID auto-incrémenté pour éviter les erreurs potentielles
        
            $table->unsignedBigInteger('produit_id');
            $table->unsignedBigInteger('couleur_id');
        
            $table->foreign('produit_id')->references('produit_id')->on('produits')->onDelete('cascade');
            $table->foreign('couleur_id')->references('couleur_id')->on('couleurs')->onDelete('cascade');
        
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produit_couleur');
    }
};
