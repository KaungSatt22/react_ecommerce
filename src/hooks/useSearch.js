import { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";

export const useSearch = () => {
  const { search, handleSearch } = useContext(SearchContext);
  return { search, handleSearch };
};
