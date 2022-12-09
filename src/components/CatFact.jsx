import React from "react";
import { Link } from "react-router-dom";

export default function CatFact() {
  let getData = localStorage.getItem("catfacts");
  let pard = JSON.parse(getData);
  console.log(pard);
  return (
    <>
    <Link to="/">home</Link>
      <ul>
        {pard &&
          pard.map((cat) => 
            <li key={cat.length}>
              <p>{cat.fact}</p>
              <p>heelo</p>
            </li>
          )}
      </ul>
    </>
  );
}
