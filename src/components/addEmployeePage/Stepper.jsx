const Stepper = ({ activeIndex }) => {
  return (
    <div className="mb-5 position-relative">
      <div className="progress-line z-n1 position-absolute w-100"></div>
      <div
        className={`active-progress-line bg-success position-absolute z-n1 ${
          activeIndex === 2 ? "w-100" : activeIndex === 1 ? "w-50" : "w-0"
        }`}
      ></div>
      <div className=" d-flex justify-content-between align-items-center relative">
        <div className="bg-white">
          <span
            className={`border rounded-pill p-3 bg-light ${
              activeIndex > 0
                ? "text-success border-success"
                : "text-primary border-primary"
            }`}
          >
            1
          </span>
          <span className="px-2">personal details</span>
        </div>
        <div className="bg-white">
          <span
            className={`border rounded-pill p-3 bg-light ${
              activeIndex > 1
                ? "text-success border-success"
                : activeIndex === 1
                ? "text-primary border-primary"
                : "border-secondary text-secondary"
            }`}
          >
            2
          </span>
          <span className="px-2"> bank details</span>
        </div>
        <div className="bg-white">
          <span
            className={`border rounded-pill p-3 bg-light ${
              activeIndex > 2
                ? "text-success border-success"
                : activeIndex === 2
                ? "text-primary border-primary"
                : "border-secondary text-secondary"
            }`}
          >
            3
          </span>
          <span className="px-2">professional details</span>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
