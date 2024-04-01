import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import SerialDataReader from "./components/Serial/SerialDataReader";
const App = () => {
<<<<<<< HEAD
  const [data, setData] = useState([]);

  return (
    <div>
     <SerialDataReader onDataReceived={data => console.log(data)} />

      {/* <GraphComponent data={data} /> */}
    </div>
=======

  return (
    <>
      <Navbar />
    </>
>>>>>>> a79fa3e11619b6d89af5803cc93f0173260d1322
  );
};

export default App;
