import { useEffect, useState } from "react";
import Header from "../Header";
import { getProduits, getProduit, createProduit, updateProduit, deleteProduit } from "@/service/ProduitService";
import { Layers2Icon } from "lucide-react";
import FilteredTable from "@/components/Tables/FilteredTable";

const Produits = () => {
  const [formData, setFormData] = useState({title: "", image: "", rang: "" });
  const [produits, setProduits] = useState([]);

  const columns = [
    { label: "Titre", key: "titre", type: "text" },
    { label: "Image", key: "image", type: "img" },
    { label: "Date de création", key: "created_at", type: "date" },
    { label: "Rang", key: "rang", type: "progress" },
    { label: "Actions", key: "actions", type: "actions" }
  ];
  const fields = [
    { label: "Titre", key: "titre", type: "text" },
    { label: "Rang", key: "rang", type: "number" },
    { label: "Image", key: "image", type: "image" }
  ];

  useEffect(() => { (async () => setProduits(await getProduits()))()}, [produits]);

  const handleProduit = async (id) => {
    try {
      console.log(id);
      const produit = await getProduit(id);
      setFormData(produit);
    } catch (error) {
      console.error("Erreur lors de la récupération du produit:", error);
      alert('Une erreur est survenue lors de la récupération du produit');
    }
  };
  const handleCreate = async () => {
    try {
      await createProduit(formData);
      setProduits((prevProduits) => prevProduits.filter(produit => produit.id !== formData.id));
      alert(`Produit ajouter avec succès`);
    } catch (error) {
      console.error("Erreur d'ajout:", error);
      alert('Une erreur est survenue lors de l\'ajout du produit');
    }
  }; 
  const handleEdit = async () => {
    try {      
      await updateProduit(formData.id, formData);
      setProduits((prevProduits) => prevProduits.filter(produit => produit.id !== formData.id));
      alert(`Produit avec l'ID ${formData.id} modifié avec succès`);
    } catch (error) {
      console.error("Erreur de modification:", error);
      alert("Une erreur est survenue lors de la modification du produit");
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteProduit(id);
      setProduits((prevPosts) => prevPosts.filter(post => post.id !== id));
      alert(`Produit with id ${id} supprimé avec succès`);
    } catch (error) {
      console.error("Erreur de suppression:", error);
      alert('Une erreur est survenue lors de la suppression du produit');
    }
  };

  const formattedProduits = produits.map((item) => ({ ...item,
    actions: {
      edit: () => handleProduit(item.produit_id),
      delete: (id) => handleDelete(id)
    }
  }));

  const formActions = {formData, setFormData, fields, handleCreate, handleEdit, columns};

  return (
    <>
      <Header title="Produits" icon={Layers2Icon} parent="Gestion des produits" current="Produits" />
      <FilteredTable formActions={formActions} label={"produits"} datas={formattedProduits} />
    </>
  );
};

export default Produits;
