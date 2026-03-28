import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees }) {
  if (!employees || employees.length === 0) {
    return <p>Aucun employé pour le moment.</p>;
  }

  return (
    <div>
      <h2>Liste des employés</h2>

      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
}

export default EmployeeList;