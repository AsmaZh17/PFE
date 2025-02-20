<?php

namespace App\Http\Controllers;

use App\Models\CommandeLivraison;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class CommandeLivraisonController extends Controller implements HasMiddleware
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
        return CommandeLivraison::where('modeLivraison', 'CommandeLivraison')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([

        ]);

        $commandeLivraison = CommandeLivraison::create($validatedData);

        return response()->json($commandeLivraison, 200);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $commandeLivraison = CommandeLivraison::where('commande_id', $id)
            ->where('modeLivraison', 'CommandeLivraison')
            ->firstOrFail();
    
        return response()->json($commandeLivraison);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $commandeLivraison = CommandeLivraison::where('commande_id', $id)
            ->where('modeLivraison', 'CommandeLivraison')
            ->firstOrFail();
        
        $validatedData = $request->validate([
        
        ]);

        $commandeLivraison->update($validatedData);

        return response()->json($commandeLivraison, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $commandeLivraison = CommandeLivraison::where('commande_id', $id)
            ->where('modeLivraison', 'CommandeLivraison')
            ->firstOrFail();
        
        $commandeLivraison->delete();
        return response()->json(['message' => 'Livraison avec id ' . $commandeLivraison->commande_id . ' effacer avec succés'], 200);
    }
}
