<?php

namespace App\Http\Controllers;

use App\Models\CodePromotion;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class CodePromotionController extends Controller implements HasMiddleware
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
        return CodePromotion::all();
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
        $codePromotion = CodePromotion::findOrFail($id);
        return response()->json($codePromotion);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CodePromotion $codePromotion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $codePromotion = CodePromotion::findOrFail($id);
        $codePromotion->delete();
        return response()->json(['message' => 'CodePromotion avec id ' . $codePromotion->code_promotion_id . ' effacer avec succés'], 200);
    }
}
