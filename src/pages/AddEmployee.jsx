import { useNavigate } from "react-router-dom";
import PersonalDetailsForm from "../components/addEmployeePage/PersonalDetailsForm";

const AddEmployee = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
      navigate('/home')
  };

  return (
    <div className="container mt-5">
      <PersonalDetailsForm  goBack={handleNavigate}/>
    </div>
  );
};

export default AddEmployee;
