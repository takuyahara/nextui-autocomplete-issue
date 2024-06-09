import React from "react";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {animals} from "./data";

export default function App() {
  const sizes = ["sm", "md", "lg"];

  return (
    <div className="w-full flex flex-col gap-4">
      {sizes.map((size) => (
        <div key={size} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Autocomplete 
            size={size}
            defaultItems={animals}
            label="Select an animal" 
            className="max-w-xs" 
          >
            {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
          </Autocomplete>
          <Autocomplete
            size={size}
            defaultItems={animals}
            label="Favorite Animal"
            placeholder="Search an animal"
            className="max-w-xs"
          >
            {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
          </Autocomplete>
        </div>
      ))}  
    </div>  
  );
}
