import { useNavigate } from "react-router-dom";

const PreviewDetails = ({
  personalDetails,
  bankDetails,
  professionalDetails,
}) => {
  const navigate = useNavigate();
  const renderFileLink = (fileInput, getUrl = false) => {
    if (!fileInput || !fileInput[0]) return "No file selected";
    const file = fileInput[0];
    const fileURL = URL.createObjectURL(file);

    if (getUrl) {
      return fileURL;
    }

    return (
      <a href={fileURL} target="_blank" rel="noopener noreferrer">
        {file.name || "View File"}
      </a>
    );
  };

  const handleSubmit = () => {
    let employeeData = localStorage.getItem("emp") || "[]";
    employeeData = JSON.parse(employeeData);
    const imageUrl = renderFileLink(personalDetails.image, true);
    const resumeUrl = renderFileLink(professionalDetails.resume, true);
    employeeData.unshift({
      personalDetails: {
        ...personalDetails,
        imageUrl,
      },
      bankDetails,
      professionalDetails: {
        ...professionalDetails,
        resumeUrl,
      },
    });
    employeeData = JSON.stringify(employeeData);
    localStorage.setItem("emp", employeeData);
    alert("Data saved successfully");
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <div
        className="d-flex justify-content-between align-items-center bg-white py-2 border-bottom "
        style={{ position: "sticky", top: 0, zIndex: 1000 }}
      >
        <h3>Preview </h3>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {/* Personal Details */}
      <section className="my-4">
        <h5>Personal Details</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>First Name:</strong> {personalDetails.firstName}
          </li>
          <li className="list-group-item">
            <strong>Middle Name:</strong> {personalDetails.middleName}
          </li>
          <li className="list-group-item">
            <strong>Last Name:</strong> {personalDetails.lastName}
          </li>
          <li className="list-group-item">
            <strong>Email:</strong> {personalDetails.email}
          </li>
          <li className="list-group-item">
            <strong>Mobile:</strong> {personalDetails.mobile}
          </li>
          <li className="list-group-item">
            <strong>Date of Birth:</strong> {personalDetails.dob}
          </li>
          <li className="list-group-item">
            <strong>Image:</strong> {renderFileLink(personalDetails.image)}
          </li>
          <li className="list-group-item">
            <strong>Permanent Address:</strong>{" "}
            {personalDetails.permanentAddress}
          </li>
          <li className="list-group-item">
            <strong>Present Address:</strong> {personalDetails.presentAddress}
          </li>
        </ul>
      </section>

      {/* Bank Details */}
      <section className="mb-4">
        <h5>Bank Details</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Bank Name:</strong> {bankDetails.bankName}
          </li>
          <li className="list-group-item">
            <strong>Account Holder Name:</strong>{" "}
            {bankDetails.accountHolderName}
          </li>
          <li className="list-group-item">
            <strong>Account Number:</strong> {bankDetails.accountNumber}
          </li>
          <li className="list-group-item">
            <strong>IFSC:</strong> {bankDetails.ifsc}
          </li>
          <li className="list-group-item">
            <strong>Aadhaar:</strong> {bankDetails.aadhaar}
          </li>
          <li className="list-group-item">
            <strong>PAN:</strong> {bankDetails.pan}
          </li>
        </ul>
      </section>

      {/* Professional Details */}
      <section className="mb-4">
        <h5>Professional Details</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Designation:</strong> {professionalDetails.designation}
          </li>
          <li className="list-group-item">
            <strong>Department:</strong> {professionalDetails.department}
          </li>
          <li className="list-group-item">
            <strong>Experience:</strong> {professionalDetails.experienceYears}{" "}
            years, {professionalDetails.experienceMonths} months
          </li>
          <li className="list-group-item">
            <strong>Current Location:</strong>{" "}
            {professionalDetails.currentLocation}
          </li>
          <li className="list-group-item">
            <strong>Resume:</strong>{" "}
            {renderFileLink(professionalDetails.resume)}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PreviewDetails;
