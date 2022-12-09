import React, { useState, useEffect } from "react";

export default function CatFact({ savedfact }) {
//   const [factArray, setFactArray] = useState([]);
//   // const storeData =localStorage.getItem("catfacts",   JSON.stringify(savedfact))
//   let getData = localStorage.getItem("catfacts");
//   getData = JSON.parse(getData);

//   useEffect(() => {
//     if (getData ) {
//       setFactArray(getData, savedfact);
//       const save = localStorage.setItem("catfacts", JSON.stringify(factArray));
//       console.log(factArray);
//     } else{
//     const room=  [savedfact]
//         setFactArray(...room);
//     const rr=    localStorage.setItem("catfacts", JSON.stringify(factArray));
//         // console.log(factArray)
   
//       // setFactArray(savedfact);
//       // localStorage.setItem("catfacts", JSON.stringify(factArray));
//     }
//   }, [savedfact]);
// console.log(savedfact,factArray)
  return (
    <ul>
      <li key={savedfact.length}>
        <p>{savedfact.fact}</p>
      </li>
    </ul>
  );
}
