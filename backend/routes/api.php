<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\CodePromotionController;
use App\Http\Controllers\JourFerieController;
use App\Http\Controllers\HoraireController;
use App\Http\Controllers\DetailFactureController;
use App\Http\Controllers\FactureCommandeController;
use App\Http\Controllers\FournisseurController;
use App\Http\Controllers\LivraisonController;
use App\Http\Controllers\LivreurController;
use App\Http\Controllers\MarqueController;
use App\Http\Controllers\PanierController;
use App\Http\Controllers\PeriodeHoraireController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\PromotionController;
use App\Http\Controllers\RetraitDriveController;
use App\Http\Controllers\SousCategorieController;
use App\Models\FactureFournisseur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('admins', AdminController::class);
Route::apiResource('categories', CategorieController::class); //tester
Route::apiResource('clients', ClientController::class);
Route::apiResource('codePromotions', CodePromotionController::class);
Route::apiResource('detailFactures', DetailFactureController::class); //tester
Route::apiResource('factureCommandes', FactureCommandeController::class);
Route::apiResource('factureFournisseurs', FactureFournisseur::class);
Route::apiResource('fournisseurs', FournisseurController::class);
Route::apiResource('horaires', HoraireController::class); //tester
Route::apiResource('joursFeries', JourFerieController::class); //tester
Route::apiResource('livraisons', LivraisonController::class);
Route::apiResource('livreurs', LivreurController::class);
Route::apiResource('marques', MarqueController::class);
Route::apiResource('paniers', PanierController::class);
Route::apiResource('PeriodesHoraires', PeriodeHoraireController::class); //tester
Route::apiResource('produits', ProduitController::class);
Route::apiResource('promotions', PromotionController::class);
Route::apiResource('retraitDrives', RetraitDriveController::class);
Route::apiResource('sousCategories', SousCategorieController::class);

require __DIR__.'/auth.php';