import "./App.css";
import useFetch from "./hook/useFetch";

function App() {
  const url = "https://catfact.ninja/fact";
  const { loading, error, catFact,  fetchData } = useFetch(url);
  //  const [fact, setFact] = useState([]);
  // setFact(...fact, { ...randomFact, date: new Date() });
  // const put = JSON.stringify(fact);
  // const setfac =  localStorage.setItem("catfacts", put);


  // const [fac, setFac] = useState();
  // useEffect(() => {
  // if (store !=="undefined") {
  //     let trans = JSON.parse(store);
  //     setFac()
  //     // const putt = trans.concat(fact);
  //     const put = JSON.stringify(fac);
  //     localStorage.setItem("catfacts", put);
  //   } 
  //   else {
  //     setFac(fact)
  //     let rr = JSON.stringify(fac);
  //     localStorage.setItem("catfacts", rr);
  //   }

  // }, [fac]);

  return (
    <div className="App">
      {loading && <>loading...</>}
      {error === true && <>error</>}
      {catFact &&<div className="container">
        <p>{catFact.fact}</p>
        <button onClick={fetchData}>click</button>
      </div> }
    </div>
  );
}

export default App;
