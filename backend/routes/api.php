<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\CodePromotionController;
use App\Http\Controllers\CommandeLivraisonController;
use App\Http\Controllers\CommandeRetraitDriveController;
use App\Http\Controllers\JourFerieController;
use App\Http\Controllers\HoraireController;
use App\Http\Controllers\DetailFactureController;
use App\Http\Controllers\FactureCommandeController;
use App\Http\Controllers\FactureFournisseurController;
use App\Http\Controllers\FournisseurController;
use App\Http\Controllers\LivreurController;
use App\Http\Controllers\MarqueController;
use App\Http\Controllers\PanierController;
use App\Http\Controllers\PeriodeHoraireController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\PromotionController;
use App\Http\Controllers\SousCategorieController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('categories', CategorieController::class); //tester
Route::apiResource('codePromotions', CodePromotionController::class); //tester
Route::apiResource('PeriodesHoraires', PeriodeHoraireController::class); //tester
Route::apiResource('joursFeries', JourFerieController::class); //tester
Route::apiResource('marques', MarqueController::class); //tester
Route::apiResource('promotions', PromotionController::class); //tester

Route::apiResource('horaires', HoraireController::class); //tester
Route::apiResource('sousCategories', SousCategorieController::class); //tester
Route::apiResource('detailFactures', DetailFactureController::class); //tester

Route::apiResource('factureCommandes', FactureCommandeController::class); //tester
Route::apiResource('factureFournisseurs', FactureFournisseurController::class); //tester

Route::apiResource('produits', ProduitController::class); //tester
Route::apiResource('paniers', PanierController::class); //tester

Route::apiResource('commandeLivraisons', CommandeLivraisonController::class); //tester
Route::apiResource('commandeRetraitDrives', CommandeRetraitDriveController::class); //tester

Route::apiResource('admins', AdminController::class);
Route::apiResource('clients', ClientController::class);
Route::apiResource('fournisseurs', FournisseurController::class);
Route::apiResource('livreurs', LivreurController::class);

require __DIR__.'/auth.php';