<?php

namespace App\Http\Controllers;

use App\Models\FactureCommande;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class FactureCommandeController extends Controller implements HasMiddleware
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
        return FactureCommande::all();
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
        $factureCommande = FactureCommande::findOrFail($id);
        return response()->json($factureCommande);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FactureCommande $factureCommande)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $factureCommande = FactureCommande::findOrFail($id);
        $factureCommande->delete();
        return response()->json(['message' => 'FactureCommande avec id ' . $factureCommande->facture_id . ' effacer avec succés'], 200);
    }
}
