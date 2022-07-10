import './App.css';
import './index.css';
import React from "react";
import {SearchTerm} from "./features/search-term/search-term";
import {AllResults} from "./features/all-results/all-results";


export function App() {
  return (
      <main>
        <section>
          <SearchTerm />
        </section>
        <hr/>
        <section>
          <h2> All Results </h2>
          <AllResults />
        </section>
      </main>
  )
}