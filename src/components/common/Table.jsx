const Table = ({ data }) => {
  if (!data || data.length === 0) return <p>No data available</p>;

  return (
    <div className="table-responsive mt-4">
      <table className="table table-bordered align-middle text-center">
        <thead className="table-dark">
          <tr>
            <th>Profile Picture</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Resume</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => {
            const { personalDetails, professionalDetails } = entry;
            const fullName = `${personalDetails.firstName || ""} ${personalDetails.middleName || ""} ${personalDetails.lastName || ""}`.trim();

            return (
              <tr key={index}>
                <td>
                  {personalDetails.imageUrl ? (
                    <img
                      src={personalDetails.imageUrl}
                      alt="Profile"
                      width="60"
                      height="60"
                      className="rounded-circle object-fit-cover"
                    />
                  ) : (
                    "N/A"
                  )}
                </td>
                <td>{fullName || "N/A"}</td>
                <td>{professionalDetails.department || "N/A"}</td>
                <td>{professionalDetails.designation || "N/A"}</td>
                <td>{personalDetails.email || "N/A"}</td>
                <td>{personalDetails.mobile || "N/A"}</td>
                <td>
                  {professionalDetails.resumeUrl ? (
                    <a
                      href={professionalDetails.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-primary"
                    >
                      View Resume
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
