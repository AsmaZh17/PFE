<?php

use App\Enums\EtatLivraisonEnum;
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
            $table->foreignId('commande_id')->constrained('commandes', 'commande_id')->onDelete('cascade');
            $table->foreignId('livreur_id')->constrained('livreurs', 'livreur_id')->onDelete('cascade');
            $table->date('date');
            $table->enum('etatLivraison', EtatLivraisonEnum::values())->default(EtatLivraisonEnum::NonLivree->value);
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
