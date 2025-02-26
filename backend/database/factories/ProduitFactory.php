<?php

namespace Database\Factories;

use App\Models\Produit;
use App\Models\Marque;
use App\Models\SousCategorie;
use App\Models\Promotion;
use App\Models\Couleur;
use App\Enums\StatusProduitEnum;
use App\Models\Users\User;
use Database\Factories\Users\FournisseurFactory;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProduitFactory extends Factory
{
    protected $model = Produit::class;

    public function definition()
    {
        return [
            'marque_id' => Marque::factory(),
            'sous_categorie_id' => SousCategorie::factory(),
            'promotion_id' => Promotion::factory(),
            'fournisseur_id' => FournisseurFactory::new()->create()->id,
            'nom' => $this->faker->word(),
            'status' => $this->faker->randomElement(StatusProduitEnum::values()),  // Valeur aléatoire parmi les statuts définis dans l'enum
            'description' => $this->faker->sentence(),
            'prix' => $this->faker->randomFloat(2, 10, 1000),  // Prix entre 10 et 1000
            'image' => $this->faker->imageUrl(),  // URL d'image générée aléatoirement
        ];
    }

    /**
     * Génère un tableau de couleurs associées au produit.
     *
     * @return array
     */
    private function generateCouleurs()
    {
        $couleurs = [];
        $count = rand(1, 3);  // Nombre de couleurs associées (1 à 3)
        
        for ($i = 0; $i < $count; $i++) {
            $couleurs[] = Couleur::inRandomOrder()->first()->couleur_id;  // Choisit des couleurs au hasard parmi celles existantes
        }

        return $couleurs;
    }
}
