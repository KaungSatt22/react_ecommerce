import { useState } from "react";
import { createContext } from "react";

export const SearchContext = createContext({
  search: "",
  handleSearch: (searchItem) => {},
});

export const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <SearchContext.Provider value={{ search, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
