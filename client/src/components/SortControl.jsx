import React, { useContext } from "react";
import { CompanyContext } from "../context/CompanyContext";

const SortControl = () => {
  const { sortBy, setSortBy, setPage } = useContext(CompanyContext);

  const toggleOrder = () => { setSortBy(prev => ({ ...prev, order: prev.order === "asc" ? "desc" : "asc" })); setPage(1); };

  return (
    <div className="sort-control">
      <button onClick={toggleOrder}>Sort by name: {sortBy.order === "asc" ? "A → Z" : "Z → A"}</button>
    </div>
  );
};

export default SortControl;
