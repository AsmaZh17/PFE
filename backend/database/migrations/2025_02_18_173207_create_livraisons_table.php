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
        Schema::create('livraisons', function (Blueprint $table) {
            $table->id('livraison_id');
            $table->foreignId('commande_id')->constrained('commandes')->onDelete('cascade');
            $table->foreignId('livreur_id')->constrained('livreurs')->onDelete('cascade');
            $table->date('date');
            $table->string('etatLivraison');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('livraisons');
    }
};
