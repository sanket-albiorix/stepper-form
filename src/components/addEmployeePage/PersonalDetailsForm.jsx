import { useEffect } from "react";
import { useForm } from "react-hook-form";

const PersonalDetailsForm = ({ goBack, onNext, personalDetails }) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: personalDetails,
  });

  const onSubmit = (data) => {
    onNext(data);
  };

  const sameAsPermanent = watch("sameAsPermanent");
  const permanentAddress = watch("permanentAddress");

  useEffect(() => {
    if (sameAsPermanent) {
      setValue("presentAddress", permanentAddress);
    }
  }, [sameAsPermanent, permanentAddress, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4>Personal Details</h4>
      <div className="row mb-3">
        <div className="col">
          <label>First Name</label>
          <input
            className="form-control"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <span className="text-danger">First name is required</span>
          )}
        </div>

        <div className="col">
          <label>Middle Name</label>
          <input className="form-control" {...register("middleName")} />
        </div>

        <div className="col">
          <label>Last Name</label>
          <input
            className="form-control"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <span className="text-danger">Last name is required</span>
          )}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email",
              },
            })}
          />
          {errors.email && (
            <span className="text-danger">{errors.email.message}</span>
          )}
        </div>

        <div className="col">
          <label>Mobile</label>
          <input
            className="form-control"
            type="tel"
            {...register("mobile", {
              required: "Mobile is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit number",
              },
            })}
          />
          {errors.mobile && (
            <span className="text-danger">{errors.mobile.message}</span>
          )}
        </div>

        <div className="col">
          <label>Date of Birth</label>
          <input
            className="form-control"
            type="date"
            {...register("dob", { required: true })}
          />
          {errors.dob && (
            <span className="text-danger">Date of birth is required</span>
          )}
        </div>
      </div>

      <div className="mb-3">
        <label>Upload Image</label>
        {personalDetails?.image && (
          <div className="mb-2">
            <p className="text-muted">
              Previously selected file: {personalDetails.image[0].name}
            </p>
          </div>
        )}
        <input
          className="form-control"
          type="file"
          {...register("image", {
            required: personalDetails?.image ? false : true,
          })}
        />
        {errors.image && <span className="text-danger">Image is required</span>}
      </div>

      <div className="row">
        <div className="mb-3 col">
          <label>Permanent Address</label>
          <textarea
            className="form-control"
            {...register("permanentAddress", { required: true })}
          />
          {errors.permanentAddress && (
            <span className="text-danger">Required</span>
          )}
        </div>

        <div className="mb-3 col">
          <label>Present Address</label>
          <textarea
            className="form-control"
            {...register("presentAddress", { required: true })}
          />
          {errors.presentAddress && (
            <span className="text-danger">Required</span>
          )}
          <div className="mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="sameAsPermanent"
              {...register("sameAsPermanent")}
            />
            <label className="form-check-label" htmlFor="sameAsPermanent">
              &nbsp; Same as permanent address
            </label>
          </div>
        </div>
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

export default PersonalDetailsForm;
