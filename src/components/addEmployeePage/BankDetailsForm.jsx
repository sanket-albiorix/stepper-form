import { useForm } from "react-hook-form";

const BankDetailsForm = ({ goBack, onNext, bankDetails }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: bankDetails,
  });

  const onSubmit = (data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4>Bank Details</h4>

      <div className="mb-3">
        <label>Bank Name</label>
        <input
          className="form-control"
          {...register("bankName", { required: "Bank name is required" })}
        />
        {errors.bankName && (
          <span className="text-danger">{errors.bankName.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label>Account Holder Name</label>
        <input
          className="form-control"
          {...register("accountHolderName", {
            required: "Account holder name is required",
          })}
        />
        {errors.accountHolderName && (
          <span className="text-danger">
            {errors.accountHolderName.message}
          </span>
        )}
      </div>

      <div className="mb-3">
        <label>Bank Account Number</label>
        <input
          className="form-control"
          type="text"
          {...register("accountNumber", {
            required: "Account number is required",
            pattern: {
              value: /^[0-9]{9,18}$/,
              message: "Enter a valid account number",
            },
          })}
        />
        {errors.accountNumber && (
          <span className="text-danger">{errors.accountNumber.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label>IFSC Code</label>
        <input
          className="form-control"
          {...register("ifsc", {
            required: "IFSC code is required",
            pattern: {
              value: /^[A-Z]{4}0[A-Z0-9]{6}$/,
              message: "Enter a valid IFSC code",
            },
          })}
        />
        {errors.ifsc && (
          <span className="text-danger">{errors.ifsc.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label>Aadhaar Card Number</label>
        <input
          className="form-control"
          type="text"
          {...register("aadhaar", {
            required: "Aadhaar number is required",
            pattern: {
              value: /^[0-9]{12}$/,
              message: "Enter a valid 12-digit Aadhaar number",
            },
          })}
        />
        {errors.aadhaar && (
          <span className="text-danger">{errors.aadhaar.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label>PAN Card Number</label>
        <input
          className="form-control"
          type="text"
          {...register("pan", {
            required: "PAN number is required",
            pattern: {
              value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
              message: "Enter a valid PAN number",
            },
          })}
        />
        {errors.pan && (
          <span className="text-danger">{errors.pan.message}</span>
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

export default BankDetailsForm;
