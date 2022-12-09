import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import useFetch from "./hook/useFetch";
import CatFact from "./components/CatFact";
import Home from "./components/Home";
function App() {

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
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/catfacts"  element={<CatFact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
