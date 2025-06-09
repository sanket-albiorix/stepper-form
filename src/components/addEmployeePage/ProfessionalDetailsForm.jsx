import { useForm } from "react-hook-form";

const ProfessionalDetailsForm = ({ goBack, onNext, professionalDetails }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: professionalDetails,
  });

  const onSubmit = (data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4>Professional Details</h4>

      <div className="mb-3">
        <label>Designation</label>
        <input
          className="form-control"
          {...register("designation", { required: "Designation is required" })}
        />
        {errors.designation && (
          <span className="text-danger">{errors.designation.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label>Department</label>
        <input
          className="form-control"
          {...register("department", { required: "Department is required" })}
        />
        {errors.department && (
          <span className="text-danger">{errors.department.message}</span>
        )}
      </div>

      <div className="row mb-3">
        <div className="col">
          <label>Experience - Years</label>
          <select
            className="form-control"
            {...register("experienceYears", {
              required: "Years of experience is required",
            })}
          >
            <option value="">Select Years</option>
            {[...Array(31)].map((_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
          {errors.experienceYears && (
            <span className="text-danger">
              {errors.experienceYears.message}
            </span>
          )}
        </div>

        <div className="col">
          <label>Experience - Months</label>
          <select
            className="form-control"
            {...register("experienceMonths", {
              required: "Months of experience is required",
            })}
          >
            <option value="">Select Months</option>
            {[...Array(12)].map((_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
          {errors.experienceMonths && (
            <span className="text-danger">
              {errors.experienceMonths.message}
            </span>
          )}
        </div>
      </div>

      <div className="mb-3">
        <label>Current Location</label>
        <input
          className="form-control"
          {...register("currentLocation", {
            required: "Current location is required",
          })}
        />
        {errors.currentLocation && (
          <span className="text-danger">{errors.currentLocation.message}</span>
        )}
      </div>
      {professionalDetails?.image && (
        <div className="mb-2">
          <p className="text-muted">
            Previously selected file: {professionalDetails.image[0].name}
          </p>
        </div>
      )}
      <div className="mb-3">
        <label>Upload Resume</label>
        <input
          className="form-control"
          type="file"
          {...register("resume", { required: professionalDetails?.image ? false : "Resume is required" })}
        />
        {errors.resume && (
          <span className="text-danger">{errors.resume.message}</span>
        )}
      </div>

      <div className="mt-5 d-flex justify-content-between">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => {
            goBack(getValues());
          }}
        >
          Back
        </button>
        <button type="submit" className="btn btn-primary">
          Next
        </button>
      </div>
    </form>
  );
};

export default ProfessionalDetailsForm;
