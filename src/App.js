import "./styles/styles.css";
import { Canvas } from "@react-three/fiber";
import Scatter from "./components/Scatter";
import Line from "./components/Line";
import Pie from "./components/Pie";
import ClosedCylinder from "./components/ClosedCylinder";
import Navbar from "./components/Navbar";
import NewChart from "./components/NewChart";
import Plots from "./components/Plots";

function App() {
  return (
    <>
      <Navbar />
      <Plots />
      {/* <Canvas camera={{ position: [5, 6, 10] }}>
        <Line />
      </Canvas> */}
    </>
  );
}

export default App;
