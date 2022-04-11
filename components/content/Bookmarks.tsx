import React from "react";

// Components
import DataDisplay from "./DataDisplay";
import FormItem from "./FormItem";

// React Icons
import { BiRefresh } from "react-icons/bi";
import { IoMdCreate } from "react-icons/io";

export default function Bookmarks() {
  return (
    <div>
      {" "}
      <nav className="bg-blue-400 flex flex-row justify-end px-6 text-black">
        <BiRefresh />
        <IoMdCreate />
      </nav>
      <FormItem
        formLabel="New Bookmark"
        setVariable=""
        divStyle="bg-blue-300 p-4"
      />
      <h3 className="bg-blue-200 text-black">Saved Bookmarks:</h3>
      <DataDisplay
        dataLabel="Saved Bookmarks:"
        dataContents=""
        divStyle="overflow-auto h-40 bg-blue-100 p-4"
      />
    </div>
  );
}
