import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {

  const [resResult, setResResult] = useState([])

  const getData = async () => {
    try {
      const url =
        "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=GLlkvwiWLFnyGML65VU1ukvhoYbVYa1N";
  
      const res = await axios({
        method: "GET",
        url: url,
        headers: { "Content-Type": "application/json" },
      });
      setResResult(res.data.results)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(()=>{
    getData();
  },[])

  return (
    <>
      <Navbar />
      {resResult.map((item,index) => {
        return <News key={index} newsData={item} />;
      })}
    </>
  );
}

export default App;
