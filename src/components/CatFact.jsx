import React from "react";
import { Link } from "react-router-dom";

export default function CatFact() {
  let getLocalstorageData = localStorage.getItem("catfacts");
  let catFacts = JSON.parse(getLocalstorageData);
  return (
    <div className="prev_fact">
    <Link to="/" className="home link">home</Link>
      <ul className="list">
        {catFacts &&
          catFacts.map((cat) => 
            <li key={cat.length}>
              <p>{cat.fact}</p>
              <p className="date">{new Date(cat.date).toDateString()}</p>
            </li>
          )}
      </ul>
    </div>
  );
}
