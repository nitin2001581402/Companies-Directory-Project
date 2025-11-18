import React from "react";
import { CompanyProvider } from "./context/CompanyContext";
import CompanyList from "./components/CompanyList";
import Filters from "./components/Filters";
import SortControl from "./components/SortControl";
import PaginationControl from "./components/PaginationControl";

export default function App() {
  return (
    <CompanyProvider>
      <div className="container">
        <header>
          <h1>Companies Directory</h1>
          <p>Filter · Sort · Paginate — Vite + React</p>
        </header>

        <section className="controls">
          <Filters />
          <SortControl />
        </section>

        <main>
          <CompanyList />
        </main>

        <footer>
          <PaginationControl />
        </footer>
      </div>
    </CompanyProvider>
  );
}
