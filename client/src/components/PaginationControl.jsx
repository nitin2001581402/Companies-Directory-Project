import React, { useContext } from "react";
import { CompanyContext } from "../context/CompanyContext";

const PaginationControl = () => {
  const { page, setPage, lastPage } = useContext(CompanyContext);
  return (
    <div className="pagination">
      <button onClick={() => setPage(1)} disabled={page===1}>First</button>
      <button onClick={() => setPage(p => Math.max(1, p-1))} disabled={page===1}>Prev</button>
      <span>Page {page} of {lastPage}</span>
      <button onClick={() => setPage(p => Math.min(lastPage, p+1))} disabled={page===lastPage}>Next</button>
      <button onClick={() => setPage(lastPage)} disabled={page===lastPage}>Last</button>
    </div>
  );
};

export default PaginationControl;
