"use client";
import { IoIosClose } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { IoIosSearch } from "react-icons/io";
import { Button } from "../ui/button";
import CollapseMenu from "./CollapseMenu";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function SearchFilter() {
  const [sliderValue, setSliderValue] = useState([500,5000]);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };
  return (
    <div className="w-full h-full p-4">
      {/* heading */}
      <div className="w-full flex gap-2 justify-between items-center">
        <h1 className="font-semibold text-xl">Filter by:</h1>
        <p className="flex justify-center items-center text-sm hover:cursor-pointer  text-slate-400">
          Reset all
          <IoIosClose className="w-5 h-5" />
        </p>
      </div>
      {/* Search box */}

      <div className="relative my-4">
        <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <Input
          type="text"
          placeholder="Search"
          className="pl-8 border border-gray-300 rounded w-52 h-8"
        />
      </div>
      <hr />
      {/* rental type */}
      <CollapseMenu title="RENTAL TYPE">
        <div className="w-full flex flex-wrap gap-1">
          <Button variant="outline" size="sm">
            Any
          </Button>
          <Button variant="outline" size="sm">
            Per day
          </Button>
          <Button variant="outline" size="sm">
            Per Hour
          </Button>
        </div>
      </CollapseMenu>

      {/* AVAILABLE NOW ONLY */}
      <div className="my-2 flex justify-between items-center">
        <h1 className="font-semibold text-sm cursor-pointer flex justify-between items-center">
          AVAILABLE NOW ONLY
        </h1>
        <Switch size="sm" id="available-now" />
      </div>
      {/* PRICE RANGE */}
      <CollapseMenu title="PRICE RANGE/HOUR">
        <div className="my-4">
          {/* Slider Component */}
          <Slider
            className="my-2 text-red-600"
            defaultValue={sliderValue}
            min={500}
            max={1000}
            step={1}
            onValueChange={handleSliderChange}
          />
          {/* Slider Value Display */}
          <div className="w-full flex justify-between items-center mt-2">
            <div>FROM {sliderValue[0]}</div>
            <div>TO {sliderValue[1] }</div>
          </div>
        </div>

      </CollapseMenu>
    </div>
  );
}
