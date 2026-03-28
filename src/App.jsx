import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeCard from "./components/EmployeeCard";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Leo Mondesir",
      position: "Développeur",
      department: "IT",
      status: "Actif",
    },
    {
      id: 2,
      name: "Carl Pascal",
      position: "RH",
      department: "Human Resources",
      status: "Inactif",
    },
  ]);

  const addEmployee = (employee) => {
    const newEmployee = {
      ...employee,
      id: Date.now(),
      status: "Actif",
    };

    setEmployees((prev) => [...prev, newEmployee]);
  };

  return (
    <div className="container">
      <h1>Gestion des Employés</h1>

      <EmployeeForm addEmployee={addEmployee} />

      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;