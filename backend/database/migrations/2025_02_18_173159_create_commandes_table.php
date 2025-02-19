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
        Schema::create('commandes', function (Blueprint $table) {
            $table->id('commande_id');
            $table->foreignId('panier_id')->constrained('Paniers')->onDelete('cascade');
            $table->foreignId('code_promotion_id')->constrained('Codes_Promotions')->onDelete('cascade');
            $table->decimal('total', 10, 2);
            $table->string('etatCommande')->default('En attente');
            $table->date('date');
            $table->string('modeLivraison');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commandes');
    }
};
