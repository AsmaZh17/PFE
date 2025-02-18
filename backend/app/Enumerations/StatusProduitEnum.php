<?php

namespace App\Enums;

enum StatusProduitEnum: string
{
    case Disponible = 'Disponible';
    case RuptureDeStock = 'Rupture de stock';
    case EnPromotion = 'En promotion';
    case HorsVente = 'Hors vente';
}

