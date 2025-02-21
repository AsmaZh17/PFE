import { useEffect, useState } from "react";
import Header from "../Header";
import { getCategories, getCategorie, createCategorie, updateCategorie, deleteCategorie } from "@/service/CategorieService";
import { Layers2Icon } from "lucide-react";
import FilteredTable from "@/components/Tables/FilteredTable";

const Clients = () => {
  const [formData, setFormData] = useState({title: "", image: "", rang: "" });
  const [categories, setCategories] = useState([]);

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

  useEffect(() => { (async () => setCategories(await getCategories()))()}, [categories]);

  const handleCategorie = async (id) => {
    try {
      console.log(id);
      const categorie = await getCategorie(id);
      setFormData(categorie);
    } catch (error) {
      console.error("Erreur lors de la récupération du categorie:", error);
      alert('Une erreur est survenue lors de la récupération du categorie');
    }
  };
  const handleCreate = async () => {
    try {
      await createCategorie(formData);
      setCategories((prevCategories) => prevCategories.filter(categorie => categorie.id !== formData.id));
      alert(`Categorie ajouter avec succès`);
    } catch (error) {
      console.error("Erreur d'ajout:", error);
      alert('Une erreur est survenue lors de l\'ajout du categorie');
    }
  }; 
  const handleEdit = async () => {
    try {      
      await updateCategorie(formData.id, formData);
      setCategories((prevCategories) => prevCategories.filter(categorie => categorie.id !== formData.id));
      alert(`Categorie avec l'ID ${formData.id} modifié avec succès`);
    } catch (error) {
      console.error("Erreur de modification:", error);
      alert("Une erreur est survenue lors de la modification du categorie");
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteCategorie(id);
      setCategories((prevPosts) => prevPosts.filter(post => post.id !== id));
      alert(`Categorie with id ${id} supprimé avec succès`);
    } catch (error) {
      console.error("Erreur de suppression:", error);
      alert('Une erreur est survenue lors de la suppression du categorie');
    }
  };

  const formattedCategories = categories.map((item) => ({ ...item,
    actions: {
      edit: () => handleCategorie(item.categorie_id),
      delete: (id) => handleDelete(id)
    }
  }));

  const formActions = {formData, setFormData, fields, handleCreate, handleEdit, columns};

  return (
    <>
      <Header title="Categories" icon={Layers2Icon} parent="Gestion des produits" current="Categories" />
      <FilteredTable formActions={formActions} label={"categories"} datas={formattedCategories} />
    </>
  );
};

export default Clients;
