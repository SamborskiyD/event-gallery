"use client";
import { useState } from "react";

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-5 px-4 h-min  bg-secondaryBlack rounded-lg shadow-lg overflow-hidden cursor-pointer" >
      <h1 className="text-2xl font-semibold" onClick={() => setIsOpen((prev) => !prev)}>Filters</h1>

      <form
        className={`
          flex flex-wrap md:flex-nowrap justify-between items-start max-h-0 gap-5 overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-[800px] mt-3" : ""
          }`}
      >

        <fieldset className="flex w-full flex-wrap gap-3 ">
          <legend className="text-xl mb-2.5">Type</legend>
          <div className="flex items-center gap-3">
            <input type="checkbox" name="" id="" className="checkbox" />
            <label htmlFor="">Type</label>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" name="" id="" className="checkbox" />
            <label htmlFor="">Type</label>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" name="" id="" className="checkbox" />
            <label htmlFor="">Type</label>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" name="" id="" className="checkbox" />
            <label htmlFor="">Type</label>
          </div>
        </fieldset>

        <fieldset className="flex w-full items-start gap-3">
          <legend className="text-xl mb-2.5">City</legend>
          <select name="" id="" className="input">
            <option value="">City</option>
            <option value="">City</option>
            <option value="">City</option>
            <option value="">City</option>
          </select>
        </fieldset>

        <fieldset className="flex w-full  items-start gap-3">
          <legend className="text-xl mb-2.5">Date</legend>
          <input
            type="date"
            name=""
            id=""
            min={new Date().toISOString().split("T")[0]}
            className="input"
          />
        </fieldset>

        <div className="flex flex-wrap gap-4 w-full">
          <button className="orangeButton transition-color duration-300">
            Apply filters
          </button>
          <button className="greyButton transition-color duration-300">
            Remove filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filters;
