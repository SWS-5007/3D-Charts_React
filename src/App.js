import "./styles/styles.css";
import { Canvas } from "@react-three/fiber";
import Scatter from "./components/Scatter";

function App() {
  return (
    <Canvas camera={{ position: [2, 3, 5] }}>
      <Scatter />
    </Canvas>
  );
}

export default App;
