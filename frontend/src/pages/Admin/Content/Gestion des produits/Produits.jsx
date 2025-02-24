import { useEffect, useState } from "react";
import Header from "../Header";
import { getProduits, getProduit, createProduit, updateProduit, deleteProduit } from "@/service/ProduitService";
import { getSousCategories } from "@/service/SousCategorieService";
import { getMarques } from "@/service/MarqueService";
import { getFournisseurs } from "@/service/FournisseurService";
import { getPromotions } from "@/service/PromotionService";
import { Layers2Icon } from "lucide-react";
import FilteredTable from "@/components/Tables/FilteredTable";

const Produits = () => {
  const filtres = { field: "status", value: ['Tous', 'Disponible', 'Rupture de stock'] };

  const [formData, setFormData] = useState({nom: "", description: "", status: "", image: "", prix: "", sous_categorie_id: "", marque_id: "", fournisseur_id: ""});
  const [produits, setProduits] = useState([]);

  const [sousCategories, setSousCategories] = useState([]);
  const dropdownSousCategoriesOptions = {    
    sous_categorie_id: sousCategories.map(sousCategorie => ({ value: sousCategorie.sous_categorie_id, label: sousCategorie.titre }))
  };
  const [marques, setMarques] = useState([]);
  const dropdownMarquesOptions = {    
    marque_id: marques.map(marque => ({ value: marque.marque_id, label: marque.nom }))
  };
  const [fournisseurs, setFournisseurs] = useState([]);
  const dropdownFournisseursOptions = {    
    fournisseur_id: fournisseurs.map(fournisseur => ({ value: fournisseur.id, label: fournisseur.nom + ' ' + fournisseur.prenom }))
  };

  const [promotions, setPromotions] = useState([]);
  const dropdownPromotionsOptions = {    
    promotion_id: promotions.map(promotion => ({ value: promotion.promotion_id, label: promotion.nom + ' - ' + promotion.reduction + '%' }))
  };

  const columns = [
    { label: "Titre", key: "nom", type: "text" },
    { label: "Image", key: "image", type: "img" },
    { label: "Sous Categorie", key: "sous_categorie_id", type: "id", options: dropdownSousCategoriesOptions.sous_categorie_id },
    { label: "Marque", key: "marque_id", type: "id", options: dropdownMarquesOptions.marque_id },
    { label: "Prix", key: "prix", type: "text" },
    { label: "Status", key: "status", type: "text" },
    { label: "Actions", key: "actions", type: "actions" }
    /*
    { label: "Fournisseur", key: "fournisseur_id", type: "id", options: dropdownFournisseursOptions.fournisseur_id },
    { label: "Date de création", key: "created_at", type: "date" },
     */
  ];
  const fields = [
    { label: "Titre", key: "nom", type: "text" },
    { label: "Prix", key: "prix", type: "number" },
    { label: "Image", key: "image", type: "image" },
    { label: "Sous Categorie", key: "sous_categorie_id", type: "dropdown", options: dropdownSousCategoriesOptions.sous_categorie_id },
    { label: "Marque", key: "marque_id", type: "dropdown", options: dropdownMarquesOptions.marque_id },
    { label: "Fournisseur", key: "fournisseur_id", type: "dropdown", options: dropdownFournisseursOptions.fournisseur_id },
    { label: "Promotions", key: "promotion_id", type: "dropdown", options: dropdownPromotionsOptions.promotion_id },
    { label: "Description", key: "description", type: "textarea" },
  ];

  useEffect(() => { (async () => setProduits(await getProduits()))(); }, []);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setSousCategories(await getSousCategories());
        setMarques(await getMarques());
        setFournisseurs(await getFournisseurs());
        setPromotions(await getPromotions());
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchCategories();
  }, []);  

  const handleProduit = async (produit_id) => {
    try {
      console.log(produit_id);
      const produit = await getProduit(produit_id);
      setFormData(produit);
    } catch (error) {
      console.error("Erreur lors de la récupération du produit:", error);
      alert('Une erreur est survenue lors de la récupération du produit');
    }
  };
  const handleCreate = async () => {
    try {
      await createProduit(formData);
      setProduits((prevProduits) => prevProduits.filter(produit => produit.produit_id !== formData.produit_id));
      alert(`Produit ajouter avec succès`);
    } catch (error) {
      console.error("Erreur d'ajout:", error);
      alert('Une erreur est survenue lors de l\'ajout du produit');
    }
  }; 
  const handleEdit = async () => {
    try {      
      await updateProduit(formData.produit_id, formData);
      setProduits((prevProduits) => prevProduits.filter(produit => produit.produit_id !== formData.produit_id));
      alert(`Produit avec l'ID ${formData.produit_id} modifié avec succès`);
    } catch (error) {
      console.error("Erreur de modification:", error);
      alert("Une erreur est survenue lors de la modification du produit");
    }
  };
  const handleDelete = async (produit_id) => {
    try {
      await deleteProduit(produit_id);
      setProduits((prevPosts) => prevPosts.filter(post => post.produit_id !== produit_id));
      alert(`Produit with produit_id ${produit_id} supprimé avec succès`);
    } catch (error) {
      console.error("Erreur de suppression:", error);
      alert('Une erreur est survenue lors de la suppression du produit');
    }
  };

  const formattedProduits = produits.map((item) => ({ ...item,
    actions: {
      edit: () => handleProduit(item.produit_id),
      delete: (produit_id) => handleDelete(produit_id)
    }
  }));

  const formActions = {formData, setFormData, fields, handleCreate, handleEdit, columns};

  return (
    <>
      <Header title="Produits" icon={Layers2Icon} parent="Gestion des produits" current="Produits" />
      <FilteredTable formActions={formActions} label={"produits"} datas={formattedProduits} filtres={filtres} identifiant={"produit_id"} />
    </>
  );
};

export default Produits;

