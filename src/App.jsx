import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import SerialDataReader from "./components/Serial/SerialDataReader";
const App = () => {
  const [data, setData] = useState([]);

  return (
    <div>
     <SerialDataReader onDataReceived={data => console.log(data)} />

      {/* <GraphComponent data={data} /> */}
    </div>
  );
};

export default App;
