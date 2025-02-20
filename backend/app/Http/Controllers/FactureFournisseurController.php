<?php

namespace App\Http\Controllers;

use App\Models\FactureFournisseur;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class FactureFournisseurController extends Controller implements HasMiddleware
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
        return FactureFournisseur::all();
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
        $factureFournisseur = FactureFournisseur::findOrFail($id);
        return response()->json($factureFournisseur);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FactureFournisseur $factureFournisseur)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $factureFournisseur = FactureFournisseur::findOrFail($id);
        $factureFournisseur->delete();
        return response()->json(['message' => 'FactureFournisseur avec id ' . $factureFournisseur->facture_id . ' effacer avec succés'], 200);
    }
}
