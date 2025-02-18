<?php

namespace App\Enums;

enum EtatLivraisonEnum: string
{
    case NonLivree = 'Non livrée';
    case EnCoursDeLivraison = 'En cours de livraison';
    case Livree = 'Livrée';
    case LivraisonEchouee = 'Livraison échouée';
}
