import "./styles/styles.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import NewChart from "./components/NewChart";
import PlotContainer from "./components/plots/PlotContainer";
import Plots from "./components/Plots";
import FormContainer from "./components/Forms/FormContainer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route element={<FormContainer />} path="/plot/new" />
        <Route element={<PlotContainer />} path="/plot/:id" />
        <Route element={<Plots />} path="/plots" />
        <Route element={<NewChart />} path="/" />
      </Routes>
    </>
  );
}

export default App;
