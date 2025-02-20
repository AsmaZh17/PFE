<?php

namespace App\Http\Controllers;

use App\Models\Livraison;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class LivraisonController extends Controller implements HasMiddleware
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
        return Livraison::all();
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
        $livraison = Livraison::findOrFail($id);
        return response()->json($livraison);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Livraison $livraison)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $livraison = Livraison::findOrFail($id);
        $livraison->delete();
        return response()->json(['message' => 'Livraison avec id ' . $livraison->commande_id . ' effacer avec succés'], 200);
    }
}
