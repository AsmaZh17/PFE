<?php

namespace App\Enumerations;

enum EtatCommandeEnum: string
{
    case EnAttente = 'En attente';
    case Traitee = 'Traité';
    case Expediee = 'Expédiée';
    case Livree = 'Livrée';
    case Annulee = 'Annulée';
}
