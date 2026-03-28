import { useState } from "react";

function EmployeeForm({ addEmployee }) {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    department: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (!formData.name || !formData.position || !formData.department) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    
    addEmployee(formData);

    
    setFormData({
      name: "",
      position: "",
      department: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un employé</h2>

      <input
        type="text"
        name="name"
        placeholder="Nom"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="position"
        placeholder="Poste"
        value={formData.position}
        onChange={handleChange}
      />

      <input
        type="text"
        name="department"
        placeholder="Département"
        value={formData.department}
        onChange={handleChange}
      />

      <button type="submit">Ajouter</button>
    </form>
  );
}

export default EmployeeForm;