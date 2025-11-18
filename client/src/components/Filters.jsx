import React, { useContext } from "react";
import { CompanyContext } from "../context/CompanyContext";

const Filters = () => {
  const {
    search, setSearch,
    locationFilter, setLocationFilter,
    industryFilter, setIndustryFilter,
    locations, industries, setPage
  } = useContext(CompanyContext);

  const handleChange = (setter) => (e) => { setter(e.target.value); setPage(1); };

  return (
    <div className="filters" style={{ display:"flex", gap:10, alignItems:"center" }}>
      <div className="left">
        <input
          placeholder="Search by company name..."
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
        />
        <select value={locationFilter} onChange={handleChange(setLocationFilter)}>
          {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
        </select>
        <select value={industryFilter} onChange={handleChange(setIndustryFilter)}>
          {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
        </select>
      </div>
    </div>
  );
};

export default Filters;
