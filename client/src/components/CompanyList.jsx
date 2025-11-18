import React, { useContext } from "react";
import { CompanyContext } from "../context/CompanyContext";
import CompanyCard from "./CompanyCard";

const CompanyList = () => {
  const { paginated, loading, error, total } = useContext(CompanyContext);

  if (loading) return <div className="status">Loading companies...</div>;
  if (error) return <div className="status error">Error: {error}</div>;
  if (total === 0) return <div className="status">No companies found.</div>;

  return (
    <div className="company-list">
      {paginated.map(c => <CompanyCard key={c.id} company={c} />)}
    </div>
  );
};

export default CompanyList;
