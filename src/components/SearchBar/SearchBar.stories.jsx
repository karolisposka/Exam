import React from "react";
import SearchBar from "./SearchBar";

export default {
  title: "view/SearchBar",
  component: SearchBar,
};

export const pirmary = () => {
  return (
    <SearchBar
      handleChange={(e) => {
        alert(e);
      }}
    />
  );
};
