const getSousCategories = async () => {
    const res = await fetch("/api/sous-categories");
    return res.ok ? res.json() : Promise.reject(res.json());
  };
  
  const getSousCategorie = async (_id) => {
    const res = await fetch(`/api/sous-categories/${_id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.ok ? res.json() : Promise.reject(res.json());
  };
  
  const createSousCategorie = async (formData) => {
    const res = await fetch("/api/sous-categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    });
    return res.ok ? res.json() : Promise.reject(res.json());
  };
  
  const updateSousCategorie = async (_id, formData) => {
    const res = await fetch(`/api/sous-categories/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    });
    return res.ok ? res.json() : Promise.reject(res.json());
  };
  
  const deleteSousCategorie = async (_id) => {
    const res = await fetch(`/api/sous-categories/${_id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.ok ? res.json() : Promise.reject(res.json());
  };

  export { getSousCategories, getSousCategorie, createSousCategorie, updateSousCategorie, deleteSousCategorie };
  