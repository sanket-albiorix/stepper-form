import Table from "../common/Table";

const EmployeeList = () => {
  let empData = localStorage.getItem("emp") || "[]";
  empData = JSON.parse(empData);
  
  return (
    <div className="mt-3">
      <Table data={empData} />
    </div>
  );
};

export default EmployeeList;
