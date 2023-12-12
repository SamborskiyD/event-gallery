"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getEventCities } from "@/actions/getEventCities";

const Filters = () => {
  const [cities, setCities] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      city: "",
      date: "",
      types: [],
    },
  });


  useEffect( async () => {
    const fetchedCities = await getEventCities();
    setCities(fetchedCities)
  }, [])

  const removeFilters = () => {
    reset();
    router.push("/");
  };

  const onSubmit = (data) => {
    router.push(`/?city=${data.city}&date=${data.date}&types=${data.types}`);
  };

  return (
    <div className="py-5 px-4 h-min  bg-secondaryBlack rounded-lg shadow-lg overflow-hidden cursor-pointer">
      <h1
        className="text-2xl font-semibold flex justify-between items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Filters
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`
          flex flex-wrap md:flex-nowrap justify-between items-start max-h-0 gap-5 overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-[800px] mt-3" : ""
          }`}
      >
        <fieldset className="flex w-full flex-wrap gap-3 ">
          <legend className="text-xl mb-2.5">Type</legend>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="type1"
              id="type1"
              className="checkbox"
              value="type1"
              {...register("types")}
            />
            <label htmlFor="type1">Type 1</label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="type2"
              id="type2"
              className="checkbox"
              value="type2"
              {...register("types")}
            />
            <label htmlFor="type2">Type 2</label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="type3"
              id="type3"
              className="checkbox"
              value="type3"
              {...register("types")}
            />
            <label htmlFor="type3">Type 3</label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="type4"
              id="type4"
              className="checkbox"
              value="type4"
              {...register("types")}
            />
            <label htmlFor="type4">Type 4</label>
          </div>
        </fieldset>

        <fieldset className="flex w-full items-start gap-3">
          <legend className="text-xl mb-2.5">City</legend>
          <select name="city" id="city" className="input" {...register("city")}>
            {cities?.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </fieldset>

        <fieldset className="flex w-full  items-start gap-3">
          <legend className="text-xl mb-2.5">Date</legend>
          <input
            type="date"
            name="date"
            id="date"
            min={new Date().toISOString().split("T")[0]}
            className="input"
            {...register("date")}
          />
        </fieldset>

        <div className="flex flex-wrap gap-4 w-full">
          <button
            type="submit"
            className="orangeButton transition-color duration-300"
          >
            Apply filters
          </button>
          <button
            type="button"
            onClick={removeFilters}
            className="greyButton transition-color duration-300"
          >
            Remove filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filters;
