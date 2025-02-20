import { useEffect, useState } from "react";
import Header from "../Header";
import { createCategorie, deleteCategorie, getCategorie, updateCategorie } from "@/service/CategorieService";
import { BookOpenText } from "lucide-react";
import FilteredTable from "@/components/Tables/FilteredTable";

const Categories = () => {
  const columns = [
    { label: "Titre", key: "titre", type: "text" },
    { label: "Image", key: "image", type: "img" },
    { label: "Date de création", key: "created_at", type: "date" },
    { label: "Rank", key: "rang", type: "progress" },
    { label: "Actions", key: "actions", type: "actions" }
  ];

  const [formData, setFormData] = useState({
    title: "",
    img: "",
    rank: ""
  });

  const fields = [
    { label: "Titre", key: "titre", type: "text" },
    { label: "Rank", key: "rang", type: "number" },
    { label: "Image", key: "image", type: "image" }
  ];

  const getCategories = async () => {
    try {
      const res = await fetch("/api/categories");
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return await res.json();
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchData();
  }, [categories]);

  const handleDelete = async (id) => {
    try {
      await deleteCategorie(id);
      alert(`Categorie with id ${id} supprimé avec succès`);
      setCategories((prevPosts) => prevPosts.filter(post => post.id !== id));
    } catch (error) {
      console.error("Erreur de suppression:", error);
      alert('Une erreur est survenue lors de la suppression du categorie');
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

  const handleCreate = async () => {
    try {
      await createCategorie(formData);
      setCategories((prevCategories) => prevCategories.filter(categorie => categorie.id !== formData.id));
      alert(`Categorie ajouter avec succès`);
    } catch (error) {
      console.error("Erreur d'ajout:", error);
      alert('Une erreur est survenue lors de l\'ajout du post');
    }
  }; 

  const handleCategorie = async (id) => {
    try {
      const post = await getCategorie(id);
      setFormData(post);
    } catch (error) {
      console.error("Erreur lors de la récupération du post:", error);
      alert('Une erreur est survenue lors de la récupération du post');
    }
  };

  const formattedCategories = categories.map((item) => ({
    ...item,
    actions: {
      edit: () => handleCategorie(item.id),
      delete: (id) => handleDelete(id)
    }
  }));

  const formActions = {
    formData,
    setFormData,
    fields,
    handleCreate,
    handleEdit
  };

  return (
    <>
      <Header title="Categories" icon={BookOpenText} parent="Gestion des produits" current="Categories" />
      <FilteredTable formActions={formActions} label={"categories"} datas={formattedCategories} columns={columns} />
    </>
  );
};

export default Categories;
