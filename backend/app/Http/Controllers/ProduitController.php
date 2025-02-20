<?php

namespace App\Http\Controllers;

use App\Enums\StatusProduitEnum;
use App\Models\Produit;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Validation\Rule;

class ProduitController extends Controller implements HasMiddleware
{
    public static function middleware()
    {
        return [
            new Middleware('auth:sanctum', except:['index','show'])
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Produit::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'marque_id' => 'required|exists:marques,marque_id',
            'sous_categorie_id' => 'required|exists:sous_categories,sous_categorie_id',
            'promotion_id' => 'nullable|exists:promotions,promotion_id',
            'fournisseur_id' => [
                'required',
                Rule::exists('users', 'id')->where('role', 'fournisseur')
            ],
            'nom' => 'required|string|max:255',
            'status' => [Rule::in(StatusProduitEnum::values())],
            'description' => 'required|string|max:255',
            'prix' => 'required|numeric|min:0',
            'image' => 'required|string|max:255',
        ]);
        
        $produit = Produit::create($validatedData);

        return response()->json($produit, 200);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $produit = Produit::findOrFail($id);
        return response()->json($produit);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $produit = Produit::findOrFail($id);

        $validatedData = $request->validate([
            'marque_id' => 'required|exists:marques,marque_id',
            'sous_categorie_id' => 'required|exists:sous_categories,sous_categorie_id',
            'promotion_id' => 'nullable|exists:promotions,promotion_id',
            'fournisseur_id' => [
                'required',
                Rule::exists('users', 'id')->where('role', 'fournisseur')
            ],
            'nom' => 'required|string|max:255',
            'status' => [Rule::in(StatusProduitEnum::values())],
            'description' => 'required|string|max:255',
            'prix' => 'required|numeric|min:0',
            'image' => 'required|string|max:255',
        ]);
        
        $produit->update($validatedData);

        return response()->json($produit, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $produit = Produit::findOrFail($id);
        $produit->delete();
        return response()->json(['message' => 'Produit avec id ' . $produit->produit_id . ' effacer avec succés'], 200);
    }
}
