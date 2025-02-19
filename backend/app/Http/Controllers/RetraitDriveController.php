<?php

namespace App\Http\Controllers;

use App\Models\RetraitDrive;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class RetraitDriveController extends Controller implements HasMiddleware
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
        return RetraitDrive::all();
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
        $retraitDrive = RetraitDrive::findOrFail($id);
        return response()->json($retraitDrive);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, RetraitDrive $retraitDrive)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $retraitDrive = RetraitDrive::findOrFail($id);
        $retraitDrive->delete();
        return response()->json(['message' => 'Commande retrait drive avec id ' . $retraitDrive->commande_id . ' effacer avec succés'], 200);
    }
}
