import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../hook/useFetch';

export default function () {
const url = "https://catfact.ninja/fact";
  const { loading, error, catFact,  fetchData } = useFetch(url);

const [room,setRoom]=useState([])
useEffect(()=>{
setRoom(room.concat(catFact))
localStorage.setItem("catfacts", JSON.stringify(room));
},[catFact])
console.log(room)
  return (
    <>
      {catFact && (
        <div className="container">
          {loading && <>loading...</>}
          {error === true && <>error</>}
          <Link to="/catfacts" className='link'>previous fact</Link>
          <p className="fact"> {catFact.fact}</p>
          <button onClick={fetchData}>click</button>
        </div>
      )}
    </>
  );
}
