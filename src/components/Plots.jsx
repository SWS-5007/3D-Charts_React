import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { deletePieChart, getPieCharts } from "../services/pie-chart";
import { FiDelete } from "react-icons/fi";
import { LuEdit2 } from "react-icons/lu";
import {
  deleteLineChart,
  getLineCharts,
  initialData,
} from "../services/line-chart";

const Plots = () => {
  const [lineCharts, setLineCharts] = useState([initialData]);
  const [pieCharts, setPieCharts] = useState([initialData]);
  const navigate = useNavigate();

  const fetchLineCharts = async () => {
    try {
      const { data: charts } = await getLineCharts();
      setLineCharts(charts);
    } catch (error) {
      alert("Error loading line charts!");
    }
  };
  const fetchPieCharts = async () => {
    try {
      const { data: charts } = await getPieCharts();
      setPieCharts(charts);
    } catch (error) {
      alert("Error loading pie charts!");
    }
  };

  useEffect(() => {
    fetchLineCharts();
    fetchPieCharts();
  }, []);

  const handleDeleteLineChart = async (id) => {
    try {
      await deleteLineChart(id);
      window.location = "/plots";
    } catch (error) {
      alert("Error deleting line chart!");
    }
  };

  const handleDeletePieChart = async (id) => {
    try {
      await deletePieChart(id);
      window.location = "/plots";
    } catch (error) {
      alert("Error deleting pie chart!");
    }
  };

  return (
    <section className="container plots-container">
      <header className="plots-header">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_10_20)">
            <path
              d="M1.07141 15.1714H5.76427C5.96186 15.1691 6.1553 15.1144 6.32475 15.0127C6.4942 14.911 6.63356 14.7661 6.72855 14.5928L10.5857 6.87855C10.6808 6.68649 10.8323 6.52811 11.02 6.42468C11.2077 6.32126 11.4225 6.27774 11.6357 6.29998C11.848 6.31433 12.0506 6.39417 12.2156 6.52849C12.3807 6.66281 12.5 6.84501 12.5571 7.04998L17.3357 22.95C17.3984 23.1657 17.5273 23.3562 17.7042 23.4946C17.8811 23.633 18.097 23.7124 18.3214 23.7214C18.5317 23.7144 18.7353 23.6457 18.9068 23.5237C19.0783 23.4018 19.2101 23.2321 19.2857 23.0357L22.2214 15.8571C22.3022 15.6558 22.4412 15.483 22.6206 15.3609C22.7999 15.2388 23.0116 15.1728 23.2286 15.1714H28.9286"
              stroke="#606060"
              strokeWidth="2.85714"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_10_20">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h1>Your Plots</h1>
      </header>
      <div className="plots">
        <table className="plots-table">
          <tbody>
            {lineCharts.map((chart, index) => (
              <tr key={chart._id + index}>
                <td>{index + 1}.</td>
                <td>
                  <strong>
                    <Link to={`/plot/${chart._id}?type=line`}>
                      {chart.name}
                    </Link>
                  </strong>
                </td>
                <td>{chart.description}</td>
                <td className="cell-icons">
                  <button
                    onClick={() => navigate(`/line/${chart._id}`)}
                    className="btn-icon"
                  >
                    <LuEdit2 size={20} />
                  </button>

                  <button
                    onClick={() => handleDeleteLineChart(chart._id)}
                    className="btn-icon"
                  >
                    <FiDelete color="red" size={20} />
                  </button>
                </td>
              </tr>
            ))}

            {pieCharts.map((chart, index) => (
              <tr key={chart._id + index}>
                <td>{lineCharts.length + index + 1}.</td>
                <td>
                  <strong>
                    <Link to={`/plot/${chart._id}?type=pie`}>{chart.name}</Link>
                  </strong>
                </td>
                <td>{chart.description}</td>
                <td className="cell-icons">
                  <button
                    onClick={() => navigate(`/pie/${chart._id}`)}
                    className="btn-icon"
                  >
                    <LuEdit2 size={20} />
                  </button>

                  <button
                    onClick={() => handleDeletePieChart(chart._id)}
                    className="btn-icon"
                  >
                    <FiDelete color="red" size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="plots-footer">
        <Link to="/" className="btn btn-primary">
          Create New
        </Link>
      </footer>
    </section>
  );
};

export default Plots;
