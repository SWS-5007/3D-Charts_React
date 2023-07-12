import "./styles/styles.css";
import { Canvas } from "@react-three/fiber";
import Scatter from "./components/Scatter";
import Line from "./components/Line";
import Pie from "./components/Pie";

function App() {
  return (
    <Canvas camera={{ position: [5, 6, 10] }}>
      <Pie />
    </Canvas>
  );
}

export default App;
