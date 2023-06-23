import React from "react";
import { ArrowRotate, SearchIcon } from "../../../icons/blog";
const FilterCard = () => {
  return (
    <>
      <div className="flex flex-col items-start p-4 gap-6 bg-[#252134] rounded-xl md:w-[226px]">
        <form>
          <div className="relative flex flex-col items-start py-3 px-4 gap-[10px] bg-[#15131D] rounded-lg">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              className="w-full bg-[#15131D] pl-[40px] placeholder-gray-500"
              type="text"
              placeholder="Search"
            />
          </div>
        </form>
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-2">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-normal text-base"
            >
              All
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-normal text-base"
            >
              Technologies
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-normal text-base"
            >
              Announcements
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-normal text-base"
            >
              Tutorials
            </label>
          </div>
        </div>
        <div className="border-gray-1 w-[194px]"></div>
        <div className="flex items-center gap-2 text-normal text-sm !text-[#01A7FA]">
          <ArrowRotate />
          <span>Clear filter</span>
        </div>
      </div>
    </>
  );
};

export default FilterCard;
