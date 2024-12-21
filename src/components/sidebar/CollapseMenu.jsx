"use client";
import React from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function CollapseMenu({ children, title }) {
  const [isRentalOpen, setIsRentalOpen] = useState(false);

  const toggleCollapse = () => {
    setIsRentalOpen(!isRentalOpen);
    console.log(isRentalOpen);
  };

  return (
    <div className={`relative my-4`}>
      <h1
        className="font-semibold text-sm cursor-pointer flex justify-between items-center"
        onClick={toggleCollapse}
      >
        {title}
        <span
          className={`transition-transform duration-300 ease-in-out transform ml-2 ${
            isRentalOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isRentalOpen ? <FaChevronDown /> : <FaChevronDown />}
        </span>
      </h1>
      <div
        className={`transition-all  duration-300 ease-in-out overflow-hidden transform ${
          isRentalOpen
            ? " p-2 max-h-40 opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95"
        }  `}
      >
        {children}
      </div>

      {isRentalOpen && (
          <hr className="border-t my-2 border-gray-300 transition duration-300 ease-in-out transform " />
        )}
    </div>
  );
}
