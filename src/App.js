import "./styles/styles.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import NewChart from "./components/NewChart";
import PlotContainer from "./components/PlotContainer";
import Plots from "./components/Plots";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route element={<PlotContainer />} path="/plot" />
        <Route element={<Plots />} path="/plots" />
        <Route element={<NewChart />} path="/" />
      </Routes>
    </>
  );
}

export default App;
