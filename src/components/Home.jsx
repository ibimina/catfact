import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hook/useFetch";

export default function () {
  const url = "https://catfact.ninja/fact";
  const { loading, error, catFact, fetchData } = useFetch(url);
  const getStore = localStorage.getItem("catfacts");
  const [room, setRoom] = useState([]);
  useEffect(() => {
    if (getStore) {
      let updateLocalstorage = JSON.parse(getStore).concat(catFact);
      localStorage.setItem("catfacts", JSON.stringify(updateLocalstorage));
    } else {
      setRoom(room.concat(catFact));
      localStorage.setItem("catfacts", JSON.stringify(room));
    }
  }, [catFact]);

  return (
    <>
      {catFact && (
        <div className="container">
          {loading && <>loading...</>}
          {error === true && <>error</>}
          <Link to="/catfacts" className="link">
            previous fact
          </Link>
          <p className="fact"> {catFact.fact}</p>
          <button onClick={fetchData} className="getfact">
            get facts
          </button>
        </div>
      )}
    </>
  );
}
