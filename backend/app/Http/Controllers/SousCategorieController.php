<?php

namespace App\Http\Controllers;

use App\Models\SousCategorie;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class SousCategorieController extends Controller implements HasMiddleware
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
        return SousCategorie::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $sousCategorie = SousCategorie::findOrFail($id);
        return response()->json($sousCategorie);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SousCategorie $sousCategorie)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $sousCategorie = SousCategorie::findOrFail($id);
        $sousCategorie->delete();
        return response()->json(['message' => 'Sous categorie avec id ' . $sousCategorie->sous_categorie_id . ' effacer avec succés'], 200);
    }
}
