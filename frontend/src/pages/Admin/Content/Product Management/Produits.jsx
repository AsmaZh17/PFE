import { useEffect, useState } from "react";
import Header from "../Header";
import { getProduits, getProduit, createProduit, updateProduit, deleteProduit } from "@/service/ProduitService";
import { Layers2Icon } from "lucide-react";
import FilteredTable from "@/components/Tables/FilteredTable";

const Produits = () => {
  const [formData, setFormData] = useState({nom: "", description: "", status: "", image: "", prix: "", sous_categorie_id: "", marque_id: ""});
  const [produits, setProduits] = useState([]);

  const [sousCategories, setSousCategories] = useState([]);
  // const dropdownOptions1 = {    
  //   sous_categorie_id: sousCategories.map(cat => ({ value: cat.sous_categorie_id, label: cat.titre }))
  // };

  const [marques, setMarques] = useState([]);
  // const dropdownOptions2 = {    
  //   marque_id: marques.map(marque => ({ value: marque.marque_id, label: marque.nom }))
  // };
  const [fournisseurs, setFournisseurs] = useState([]);

  const [dropdownOptions1, setDropdownOptions1] = useState([]);
  const [dropdownOptions2, setDropdownOptions2] = useState([]);
  const [dropdownOptions3, setDropdownOptions3] = useState([]);




  

  const columns = [
    { label: "Titre", key: "nom", type: "text" },
  { label: "Description", key: "description", type: "text" },
  { label: "Status", key: "status", type: "enum" },
  { label: "Image", key: "image", type: "img" },
  { label: "Prix", key: "prix", type: "number" },
  { label: "Sous Categorie", key: "sous_categorie_id", type: "id", options: dropdownOptions1 },
  { label: "Marque", key: "marque_id", type: "id", options: dropdownOptions2 },
  { label: "Fournisseur", key: "fournisseur_id", type: "id", options: dropdownOptions3 },
  { label: "Date de création", key: "created_at", type: "date" },
  { label: "Actions", key: "actions", type: "actions" }
  ];
  const fields = [
    { label: "Titre", key: "nom", type: "text" },
  { label: "Description", key: "description", type: "text" },
  { label: "Prix", key: "prix", type: "number" },
  { label: "Image", key: "image", type: "image" },
  { label: "Sous Categorie", key: "sous_categorie_id", type: "dropdown", options: dropdownOptions1 },
  { label: "Marque", key: "marque_id", type: "dropdown", options: dropdownOptions2 },
  { label: "Fournisseur", key: "fournisseur_id", type: "id", options: dropdownOptions3 }
  ];

  useEffect(() => { (async () => setProduits(await getProduits()))(); }, []);

  // useEffect(() => {
  //   const fetchSousCategories = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8000/api/sousCategories");
  //     const data = await response.json();
  //     setSousCategories(data);
  //     setDropdownOptions1(data.map(cat => ({ value: cat.sous_categorie_id, label: cat.titre })));
  //   } catch (error) {
  //     console.error("Erreur lors de la récupération des sous-catégories :", error);
  //   }
  // };

  //   fetchSousCategories();
  // }, []);

  // useEffect(() => {
  //   const fetchMarques = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8000/api/marques");
  //       const data = await response.json();
  //       setMarques(data);
  //       setDropdownOptions2(data.map(marque => ({ value: marque.marque_id, label: marque.nom })));
  //     } catch (error) {
  //       console.error("Erreur lors de la récupération des marques :", error);
  //     }
  //   };

  //   fetchMarques();
  // }, []);

  //   useEffect(() => {
  //     const fetchFournisseurs = async () => {
  //       try {
  //         const response = await fetch("http://localhost:8000/api/fournisseurs");
  //         const data = await response.json();
  //         setFournisseurs(data);
  //         setDropdownOptions3(data.map(fournisseurs => ({ value: fournisseurs.fournisseur_id, label: fournisseurs.nom })));
  //       } catch (error) {
  //         console.error("Erreur lors de la récupération des marques :", error);
  //       }
  //     };
  //     fetchFournisseurs();
  //   }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [produitsData, sousCategoriesData, marquesData, fournisseursData] = await Promise.all([
          getProduits(),
          fetch("http://localhost:8000/api/sousCategories").then(res => res.json()),
          fetch("http://localhost:8000/api/marques").then(res => res.json()),
          fetch("http://localhost:8000/api/fournisseurs").then(res => res.json())
        ]);
  
        
        console.log("SousCategories", sousCategoriesData);
        console.log("Marques", marquesData);
        console.log("Fournisseurs", fournisseursData);
        setProduits(produitsData);
        setSousCategories(sousCategoriesData);
        setDropdownOptions1(sousCategoriesData.map(cat => ({ value: cat.sous_categorie_id, label: cat.titre })));
  
        setMarques(marquesData);
        setDropdownOptions2(marquesData.map(marque => ({ value: marque.marque_id, label: marque.nom })));
  
        setFournisseurs(fournisseursData);
        setDropdownOptions3(fournisseursData.map(fournisseur => ({ value: fournisseur.fournisseur_id, label: fournisseur.nom })));
  
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };
  
    fetchData();
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
      <FilteredTable formActions={formActions} label={"produits"} datas={formattedProduits} />
    </>
  );
};

export default Produits;

