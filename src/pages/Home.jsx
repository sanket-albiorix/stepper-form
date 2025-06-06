import { useNavigate } from "react-router-dom";
import EmployeeList from "../components/homePage/EmployeeList";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/add-employee");
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-primary ms-auto d-block" onClick={handleNavigate}>Add Employee</button>
      <EmployeeList/>
    </div>
  );
};

export default Home;
