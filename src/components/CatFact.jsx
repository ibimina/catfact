import React from "react";
import { Link } from "react-router-dom";

export default function CatFact() {
  let getData = localStorage.getItem("catfacts");
  let pard = JSON.parse(getData);
  console.log(pard);
  return (
    <div className="prev_fact">
    <Link to="/" className="home">home</Link>
      <ul className="list">
        {pard &&
          pard.map((cat) => 
            <li key={cat.length}>
              <p>{cat.fact}</p>
              <p>{new Date(cat.date).toDateString()}</p>
            </li>
          )}
      </ul>
    </div>
  );
}
