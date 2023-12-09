const Filters = () => {
  return (
    <div className="w-full max-w-[15%] py-5 px-4 h-min  bg-secondaryBlack rounded-lg shadow-lg ">
      <h1 className="text-2xl font-semibold mb-3">Filters</h1>
      <form className="flex flex-col gap-5">
        <fieldset className="flex flex-col items-start gap-3">
          <legend className="text-xl mb-2.5">Type</legend>
          <div className="flex items-center gap-4">
            <input type="checkbox" name="" id="" className="checkbox" />
            <label htmlFor="">Type</label>
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" name="" id="" className="checkbox" />
            <label htmlFor="">Type</label>
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" name="" id="" className="checkbox" />
            <label htmlFor="">Type</label>
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" name="" id="" className="checkbox" />
            <label htmlFor="">Type</label>
          </div>
        </fieldset>

        <fieldset className="flex flex-col items-start gap-3">
          <legend className="text-xl mb-2.5">City</legend>
          <div className="flex items-center gap-4">
            <input type="checkbox" name="" id="" className="checkbox" />
            <label htmlFor="">City</label>
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" name="" id="" className="checkbox" />
            <label htmlFor="">City</label>
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" name="" id="" className="checkbox" />
            <label htmlFor="">City</label>
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" name="" id="" className="checkbox" />
            <label htmlFor="">City</label>
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" name="" id="" className="checkbox" />
            <label htmlFor="">City</label>
          </div>
        </fieldset>

        <fieldset className="flex flex-col items-start gap-3">
          <legend className="text-xl mb-2.5">Date</legend>
          <input
            type="date"
            name=""
            id=""
            min={new Date().toISOString().split("T")[0]}
            className="input"
          />
        </fieldset>
        <button className="orangeButton transition-color duration-300">
          Apply filters
        </button>
        <button className="greyButton transition-color duration-300">
          Remove filters
        </button>
      </form>
    </div>
  );
};

export default Filters;
