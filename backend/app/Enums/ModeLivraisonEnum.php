<?php

namespace App\Enums;

enum ModeLivraisonEnum : string
{
    case Livraison = 'Livraison';
    case retraitDrive = 'retraitDrive';

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
