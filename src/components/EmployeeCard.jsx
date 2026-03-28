function EmployeeCard({ employee }) {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>Poste : {employee.position}</p>
      <p>Département : {employee.department}</p>
      <p className={`status ${employee.status.toLowerCase()}`}>
        {employee.status}
      </p>
    </div>
  );
}

export default EmployeeCard;