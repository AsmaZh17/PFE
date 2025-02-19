const getJoursFeries = async () => {
    const res = await fetch("/api/jours-feries");
    return res.ok ? res.json() : Promise.reject(res.json());
  };
  
  const getJourFerie = async (_id) => {
    const res = await fetch(`/api/jours-feries/${_id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.ok ? res.json() : Promise.reject(res.json());
  };
  
  const createJourFerie = async (formData) => {
    const res = await fetch("/api/jours-feries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    });
    return res.ok ? res.json() : Promise.reject(res.json());
  };
  
  const updateJourFerie = async (_id, formData) => {
    const res = await fetch(`/api/jours-feries/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    });
    return res.ok ? res.json() : Promise.reject(res.json());
  };
  
  const deleteJourFerie = async (_id) => {
    const res = await fetch(`/api/jours-feries/${_id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.ok ? res.json() : Promise.reject(res.json());
  };

  export { getJoursFeries, getJourFerie, createJourFerie, updateJourFerie, deleteJourFerie };
  