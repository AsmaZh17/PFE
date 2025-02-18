import { Home, Users, ClipboardList, MapPin, Truck, Tag, Briefcase, FileText, Percent, Star, BookOpenText, Bookmark, ShoppingBag, Clock } from "lucide-react";

const menuItems = [
  {
    title: "Tableau de bord",
    items: [
      { label: "Tableau de bord", icon: <Home size={20} />, path: "/dashboard" },
    ],
  },
  {
    title: "Gestion des produits",
    items: [
      { label: "Produits", icon: <ShoppingBag size={20} />, path: "/produits" },
      { label: "Catégories", icon: <BookOpenText size={20} />, path: "/categories" },
      { label: "Marques", icon: <Bookmark size={20} />, path: "/marques" },
    ],
  },
  {
    title: "Gestion des utilisateurs",
    items: [
      { label: "Clients", icon: <Users size={20} />, path: "/clients" },
      { label: "Utilisateurs", icon: <Users size={20} />, path: "/utilisateurs" },
      { label: "Gestion des Rôles", icon: <ClipboardList size={20} />, path: "/roles" },
      { label: "Fournisseurs", icon: <Briefcase size={20} />, path: "/fournisseurs" }, // Déplacé ici
    ],
  },
  {
    title: "Gestion des commandes",
    items: [
      { label: "Historique des commandes", icon: <FileText size={20} />, path: "/commandes" },
      {
        label: "Livraison",
        icon: <Truck size={20} />,
        subItems: [
          { label: "Catégorie d'expédition", path: "/livraison/categories" },
          { label: "Modes d'expédition", path: "/livraison/modes" },
        ],
      },
    ],
  },
  {
    title: "Promotions et Offres",
    items: [
      { label: "Codes Promotions", icon: <Tag size={20} />, path: "/promotions" },
      { label: "Promotion Flash", icon: <Star size={20} />, path: "/promotion-flash" },
    ],
  },
  {
    title: "Paramètres",
    items: [
      { label: "POS", icon: <MapPin size={20} />, path: "/pos" },
      { label: "Taxes", icon: <Percent size={20} />, path: "/taxes" },
      { label: "Horaires d'ouverture", icon: <Clock size={20} />, path: "/horaires" },
    ],
  },
];

export default menuItems;
