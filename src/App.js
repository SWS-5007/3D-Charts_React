import "./styles/styles.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import NewChart from "./components/NewChart";
import PlotContainer from "./components/plots/PlotContainer";
import Plots from "./components/Plots";
import Line from "./components/Forms/Line";
import Pie from "./components/Forms/Pie";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route element={<NotFound />} path="/not-found" />
        <Route element={<Pie />} path="/pie/:id" />
        <Route element={<Line />} path="/line/:id" />
        <Route element={<PlotContainer />} path="/plot/:id" />
        <Route element={<Plots />} path="/plots" />
        <Route element={<NewChart />} path="/" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </>
  );
}

export default App;
