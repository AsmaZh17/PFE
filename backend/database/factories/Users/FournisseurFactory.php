<?php

namespace Database\Factories\Users;

use App\Models\Users\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class FournisseurFactory extends Factory
{
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nom' => $this->faker->firstName(),
            'prenom' => $this->faker->lastName(),
            'email' => $this->faker->unique()->safeEmail(),
            'telephone' => $this->faker->phoneNumber(),
            'genre' => $this->faker->randomElement(['male', 'female']),
            'date_naissance' => $this->faker->date(),
            'role' => 'fournisseur',
            'password' => Hash::make("fournisseur"),
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
