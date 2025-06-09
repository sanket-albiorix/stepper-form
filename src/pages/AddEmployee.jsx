import { useNavigate } from "react-router-dom";
import PersonalDetailsForm from "../components/addEmployeePage/PersonalDetailsForm";
import BankDetailsForm from "../components/addEmployeePage/BankDetailsForm";
import ProfessionalDetailsForm from "../components/addEmployeePage/ProfessionalDetailsForm";
import { useState } from "react";
import PreviewDetails from "../components/addEmployeePage/PreviewDetails";
import Stepper from "../components/addEmployeePage/Stepper";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [personalDetails, setPersonalDetails] = useState({});
  const [bankDetails, setBankDetails] = useState({});
  const [professionalDetails, setProfessionalDetails] = useState({});

  const [activeIndex, setActiveIndex] = useState(0);

  const handleBack = (data) => {
    handleSave(data);
    switch (activeIndex) {
      case 0:
        navigate("/");
        break;
    }
    setActiveIndex((prev) => --prev);
  };

  const handleNext = (data) => {
    handleSave(data);
    setActiveIndex((prev) => ++prev);
  };

  const handleSave = (data) => {
    switch (activeIndex) {
      case 0:
        setPersonalDetails(data);
        break;
      case 1:
        setBankDetails(data);
        break;
      case 2:
        setProfessionalDetails(data);
        break;
    }
  };

  return (
    <div className="container mt-5">
      {
        activeIndex < 3 &&
      <Stepper activeIndex={activeIndex}/>
      }
      {activeIndex === 0 && (
        <PersonalDetailsForm
          personalDetails={personalDetails}
          onNext={handleNext}
          goBack={handleBack}
        />
      )}
      {activeIndex === 1 && (
        <BankDetailsForm
          bankDetails={bankDetails}
          onNext={handleNext}
          goBack={handleBack}
        />
      )}
      {activeIndex === 2 && (
        <ProfessionalDetailsForm
          professionalDetails={professionalDetails}
          onNext={handleNext}
          goBack={handleBack}
        />
      )}
      {activeIndex === 3 && (
        <PreviewDetails
          personalDetails={personalDetails}
          bankDetails={bankDetails}
          professionalDetails={professionalDetails}
        />
      )}
    </div>
  );
};

export default AddEmployee;
