import React, { createContext, useState, useEffect } from "react";
import API from "../api";

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // filters
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [industryFilter, setIndustryFilter] = useState("All");

  // sorting & pagination
  const [sortBy, setSortBy] = useState({ field: "name", order: "asc" });
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    const fetchCompanies = async () => {
      setLoading(true);
      try {
        const res = await API.get("/companies");
        setCompanies(res.data || []);
        setError(null);
      } catch (err) {
        setError(err.message || "Failed to fetch companies");
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, []);

  const filtered = companies
    .filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    .filter(c => (locationFilter === "All" ? true : c.location === locationFilter))
    .filter(c => (industryFilter === "All" ? true : c.industry === industryFilter))
    .sort((a, b) => {
      const f = sortBy.field;
      const order = sortBy.order === "asc" ? 1 : -1;
      if ((a[f] ?? "") < (b[f] ?? "")) return -1 * order;
      if ((a[f] ?? "") > (b[f] ?? "")) return 1 * order;
      return 0;
    });

  const total = filtered.length;
  const lastPage = Math.max(1, Math.ceil(total / perPage));
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const locations = ["All", ...Array.from(new Set(companies.map(c => c.location || "").filter(Boolean)))];
  const industries = ["All", ...Array.from(new Set(companies.map(c => c.industry || "").filter(Boolean)))];

  return (
    <CompanyContext.Provider value={{
      companies, loading, error,
      search, setSearch,
      locationFilter, setLocationFilter,
      industryFilter, setIndustryFilter,
      sortBy, setSortBy,
      page, setPage, perPage,
      paginated, total, lastPage,
      locations, industries
    }}>
      {children}
    </CompanyContext.Provider>
  );
};
