<?php

use App\Http\Controllers\CategorieController;
use App\Http\Controllers\JourFerieController;
use App\Http\Controllers\HoraireController;
use App\Http\Controllers\DetailFactureController;
use App\Http\Controllers\PeriodeHoraireController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('categories', CategorieController::class);
Route::apiResource('jours-feries', JourFerieController::class);
Route::apiResource('horaires', HoraireController::class);
Route::apiResource('detail-factures', DetailFactureController::class);
Route::apiResource('PeriodesHoraires', PeriodeHoraireController::class);
require __DIR__.'/auth.php';