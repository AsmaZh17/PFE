import { Home, Users, Truck, Tag, Briefcase, FileText, Percent, Bookmark, ShoppingBag, Clock, Package, Layers2Icon, Layers3Icon } from "lucide-react";

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
      { label: "Catégories", icon: <Layers2Icon size={20} />, path: "/categories" },
      { label: "SousCategories", icon: <Layers3Icon size={20} />, path: "/sousCategories" },
      { label: "Marques", icon: <Bookmark size={20} />, path: "/marques" },
      { label: "Produits", icon: <ShoppingBag size={20} />, path: "/produits" },
    ],
  },
  {
    title: "Gestion des utilisateurs",
    items: [
      { label: "Clients", icon: <Users size={20} />, path: "/clients" },
      { label: "Fournisseurs", icon: <Briefcase size={20} />, path: "/fournisseurs" },
      { label: "Livreurs", icon: <Truck size={20} />, path: "/livreurs" }
    ],
  },
  {
    title: "Gestion des commandes",
    items: [
      /*{ label: "Historique des commandes", icon: <FileText size={20} />, path: "/commandes" },*/
      {
        label: "Commandes",
        icon: <Package size={20} />,
        subItems: [
          { label: "Livraison", path: "/commandesLivraison" },
          { label: "Retrait Drive", path: "/commandesRetraitDrive" },
        ],
      },
    ],
  },
  {
    title: "Gestion des factures",
    items: [
      /*{ label: "Détails Factures", icon: <FileText size={20} />, path: "/factures/details" },*/
      {
        label: "Factures",
        icon: <FileText size={20} />,
        subItems: [
          { label: "Fournisseurs", path: "/facturesFournisseurs" },
          { label: "Commandes", path: "/facturesCommandes" },
        ],
      },
    ],
  },
  {
    title: "Promotions et Offres",
    items: [
      { label: "Codes Promotions", icon: <Tag size={20} />, path: "/codePromotions" },
      { label: "Promotions", icon: <Percent size={20} />, path: "/promotions" },
    ],
  },
  {
    title: "Paramètres",
    items: [
      {
        label: "Horaires du Drive",
        icon: <Clock size={20} />,
        subItems: [
          { label: "Horaires", path: "/horaires/drive" },
          { label: "Jours fériés", path: "/horaires/jours-feries" },
        ],
      },
    ],
  },
];

export default menuItems;
