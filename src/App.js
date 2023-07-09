import "./styles/styles.css";
import { Canvas } from "@react-three/fiber";
import Scatter from "./components/Scatter";
import Line from "./components/Line";

function App() {
  return (
    <Canvas camera={{ position: [2, 3, 8] }}>
      <Line />
    </Canvas>
  );
}

export default App;
