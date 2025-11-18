import React from "react";

const CompanyCard = ({ company }) => (
  <div className="company-card">
    <h3>{company.name}</h3>
    <p><strong>Industry:</strong> {company.industry}</p>
    <p><strong>Location:</strong> {company.location}</p>
    <p><strong>Size:</strong> {company.size ?? "—"}</p>
    <a href={company.website} target="_blank" rel="noreferrer">Website</a>
  </div>
);

export default CompanyCard;
