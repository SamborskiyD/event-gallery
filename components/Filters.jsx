const Filters = () => {
  return (
    <div className=" border-r border-primaryGrey   w-full max-w-[15%] py-5 h-min">
      <h1 className="text-2xl font-semibold mb-3">Filters</h1>
      <form className="px-4">

        <fieldset className="flex flex-col items-start gap-3 mb-5 pb-5 border-b">
          <legend className="text-xl mb-2.5">Type</legend>
          <input type="checkbox" name="" id="" className="checkbox" />
          <input type="checkbox" name="" id="" className="checkbox" />
          <input type="checkbox" name="" id="" className="checkbox" />
          <input type="checkbox" name="" id="" className="checkbox" />
        </fieldset>

        <fieldset className="flex flex-col items-start gap-3 mb-5 pb-5 border-b">
          <legend className="text-xl mb-2.5">City</legend>
          <input type="checkbox" name="" id="" className="checkbox" />
          <input type="checkbox" name="" id="" className="checkbox" />
          <input type="checkbox" name="" id="" className="checkbox" />
          <input type="checkbox" name="" id="" className="checkbox" />
        </fieldset>

        <fieldset className="flex flex-col items-start gap-3 mb-5 pb-5 border-b">
          <legend className="text-xl mb-2.5">Date</legend>
          <label htmlFor="">From</label>
          <input
            type="date"
            name=""
            id=""
            min={new Date().toISOString().split("T")[0]}
            className="input"
          />
          <label htmlFor="">To</label>
          <input
            type="date"
            name=""
            id=""
            min={new Date().toISOString().split("T")[0]}
            className="input"
          />
        </fieldset>

        <fieldset className="flex flex-col items-start gap-3 mb-5">
          <legend className="text-lg mb-2.5">Ticket price</legend>
          <input type="range" name="" id="" />
        </fieldset>
      </form>
    </div>
  );
};

export default Filters;
