import PageNotFound from "@/pages/PageNotFound";
import AdminInterface from "@/pages/Admin/AdminInterface";
import UserInterface from "@/pages/Client/UserInterface";
import Login from "@/pages/Authentification/Login";
import Register from "@/pages/Authentification/Register";
import ForgetPassword from "@/pages/Authentification/ForgetPassword";
import ResetPassword from "@/pages/Authentification/ResetPassword";
import Home from "@/pages/Client/Content/Home";
import Shop from "@/pages/Client/Content/Shop";
import Dashboard from "@/pages/Admin/Content/Dashboard/Dashboard";
import Produits from "@/pages/Admin/Content/Product Management/Produits";
import Categories from "@/pages/Admin/Content/Product Management/Categories";
import SousCategories from "@/pages/Admin/Content/Product Management/SousCategories";
import { ProtectedAdminRoutes, ProtectedClientRoutes, ProtectedAuthRoutes } from "@/utils/ProtectedRoutes";
import Marques from "../pages/Admin/Content/Product Management/Marques";
import Clients from "../pages/Admin/Content/User Management/Clients";
import Fournisseurs from "../pages/Admin/Content/User Management/Fournisseurs";
import Livreurs from "../pages/Admin/Content/User Management/Livreurs";


const routes = [
  {
    path: "",
    element: <ProtectedAuthRoutes />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forget-password", element: <ForgetPassword /> },
      { path: "reset-password", element: <ResetPassword /> }
    ]
  },
  {
    path: "/",
    element: <UserInterface />,
    children: [
      { path: "", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "", element: <ProtectedClientRoutes />, 
        children: [
          { path: "cart", element: <Home /> },
        ] 
      }
    ]
  },
  {
    path: "*",
    element: <PageNotFound />
  },
  {
    path: "",
    element: <ProtectedAdminRoutes />,
    children: [
      {
        path: "",
        element: <AdminInterface />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "produits", element: <Produits /> },
          { path: "categories", element: <Categories /> },
          { path: "sousCategories", element: <SousCategories /> },
          { path: "marques", element: <Marques /> },
          { path: "clients", element: <Clients /> },
          { path: "fournisseurs", element: <Fournisseurs /> },
          { path: "livreurs", element: <Livreurs /> },
          { path: "commandes", element: <Dashboard /> },
          { path: "livraison/categories", element: <Dashboard /> },
          { path: "livraison/modes", element: <Dashboard /> },
          { path: "promotions", element: <Dashboard /> },
          { path: "promotion-flash", element: <Dashboard /> },
          { path: "pos", element: <Dashboard /> },
          { path: "taxes", element: <Dashboard /> },
          { path: "horaires", element: <Dashboard /> }
        ]
      }
    ]
  }
];

export default routes;
