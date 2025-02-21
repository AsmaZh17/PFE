import { useEffect, useState } from "react";
import { getProduits, getProduit, createProduit, updateProduit, deleteProduit } from "@/service/ProduitService";
import FilteredTable from "@/components/Tables/FilteredTable";
import Header from "../Header";
import { ShoppingBag } from "lucide-react";

const Produits = () => {
  const filtres = { field: "title", value: ['Tous', 'test', 'test 2'] };

  const columns = [
    { type: "checkbox" },
    { label: "Titre", key: "title", type: "text" },
    { label: "Body", key: "body", type: "text" },
    { label: "Date de création", key: "created_at", type: "date" },
    { label: "Actions", key: "actions", type: "actions" }
  ];

  const [formData, setFormData] = useState({
    title: "",
    body: ""
  });

  const fields = [
    { label: "Titre", key: "title", type: "text" },
    { label: "Body", key: "body", type: "textarea" }
  ];

  const [posts, setPosts] = useState([]);
  const [viewData, setViewData] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProduits();
      setPosts(data);
    };
    fetchData();
  }, [posts]);

  const handleDelete = async (id) => {
    try {
      await deleteProduit(id);
      alert(`Post with id ${id} supprimé avec succès`);
      setPosts((prevPosts) => prevPosts.filter(post => post.id !== id));
    } catch (error) {
      console.error("Erreur de suppression:", error);
      alert('Une erreur est survenue lors de la suppression du post');
    }
  }; 
  
  const handleEdit = async () => {
    try {
      await updateProduit(formData.id, formData);
      setPosts((prevPosts) => prevPosts.filter(post => post.id !== formData.id));

      alert(`Post avec l'ID ${formData.id} modifié avec succès`);
    } catch (error) {
      console.error("Erreur de modification:", error);
      alert("Une erreur est survenue lors de la modification du post");
    }
  }; 

  const handleCreate = async () => {
    try {
      await createProduit(formData);
      setPosts((prevCategories) => prevCategories.filter(categorie => categorie.id !== formData.id));
      alert(`Post ajouter avec succès`);
    } catch (error) {
      console.error("Erreur d'ajout:", error);
      alert('Une erreur est survenue lors de l\'ajout du post');
    }
  }; 

  const handlePost = async (id) => {
    try {
      const post = await getProduit(id);
      setViewData(post);
      setFormData(post);
    } catch (error) {
      console.error("Erreur lors de la récupération du post:", error);
      alert('Une erreur est survenue lors de la récupération du post');
    }
  };

  const formattedPosts = posts.map((item) => ({
    ...item,
    actions: {
      view: () => handlePost(item.id),
      edit: () => handlePost(item.id),
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
      <Header title="Produits" icon={ShoppingBag} parent="Gestion des produits" current="Produits" />
      <FilteredTable formActions={formActions} label={"produits"} viewData={viewData} datas={formattedPosts} filtres={filtres} columns={columns}/>
    </>
  );
};

export default Produits;
