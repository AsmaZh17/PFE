<?php

namespace Database\Factories;

use App\Models\Panier;
use App\Models\Produit;
use App\Models\Users\Client;
use Illuminate\Database\Eloquent\Factories\Factory;

class PanierFactory extends Factory
{
    protected $model = Panier::class;

    public function definition()
    {
        return [
            'client_id' => Client::factory()->state(['role' => 'client']),
        ];
    }

    /**
     * Ajoute des produits au panier.
     *
     * @param  int  $count
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function withProduits($count = 3)
    {
        return $this->afterCreating(function (Panier $panier) use ($count) {
            $produits = Produit::inRandomOrder()->limit($count)->get();
            foreach ($produits as $produit) {
                $panier->produits()->attach($produit->produit_id, ['quantite' => $this->faker->numberBetween(1, 5)]);
            }
        });
    }
}
