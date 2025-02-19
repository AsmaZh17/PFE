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
        Schema::create('produits', function (Blueprint $table) {
            $table->id('produit_id');
            $table->foreignId('marque_id')->constrained('marques')->onDelete('cascade');
            $table->foreignId('sous_categorie_id')->constrained('sous_categories')->onDelete('cascade');
            $table->foreignId('promotion_id')->constrained('Promotions')->onDelete('cascade');
            $table->string('nom');
            $table->string('status');
            $table->string('description');
            $table->decimal('prix', 10, 2);
            $table->string('image');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produits');
    }
};
