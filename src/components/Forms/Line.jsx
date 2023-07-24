import React, { useState } from "react";

import { handleCreateVertices, verticesToString } from "../../services/utils";
import { initialData } from "../../services/line-chart";
import Input from "../common/Input";
import useForm from "../../hooks/useForm";

const Line = () => {
  const [numberOfLines, setNumberOfLines] = useState(1);

  const { data, setData, errors, setErrors, handleChange, handleArrayChange } =
    useForm(initialData);

  const addLine = () => {
    for (let i = 0; i < data.plots.length; i++) {
      handleCreateVertices(i);
    }

    const copiedData = { ...data };
    copiedData.plots.push({ label: "", color: "", vertices: [] });
    setData(copiedData);

    setNumberOfLines((numberOfLines) => numberOfLines + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let charts = localStorage.getItem("charts");
    if (!charts) localStorage.setItem("charts", JSON.stringify([]));

    charts = JSON.parse(localStorage.getItem("charts"));
    const plot = { id: charts.length, type: "line" };
    charts.push(plot);

    localStorage.setItem("charts", JSON.stringify(charts));
    localStorage.setItem(plot.id, JSON.stringify(data));

    window.location = "/plot/" + plot.id;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-header">
        <div className="form-heading">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_6_198)">
              <path
                d="M1.07153 15.1714H5.76439C5.96199 15.1692 6.15542 15.1144 6.32487 15.0127C6.49432 14.9111 6.63368 14.7661 6.72868 14.5929L10.5858 6.87858C10.6809 6.68652 10.8324 6.52814 11.0201 6.42471C11.2078 6.32129 11.4227 6.27777 11.6358 6.30001C11.8481 6.31436 12.0507 6.3942 12.2158 6.52852C12.3808 6.66284 12.5001 6.84504 12.5572 7.05001L17.3358 22.95C17.3985 23.1657 17.5274 23.3562 17.7043 23.4946C17.8812 23.6331 18.0971 23.7124 18.3215 23.7214C18.5318 23.7145 18.7354 23.6457 18.9069 23.5238C19.0784 23.4018 19.2102 23.2321 19.2858 23.0357L22.2215 15.8572C22.3024 15.6558 22.4413 15.483 22.6207 15.3609C22.8 15.2388 23.0117 15.1728 23.2287 15.1714H28.9287"
                stroke="#606060"
                strokeWidth="2.85714"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_198">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h2>Line Plot</h2>
        </div>
        <button className="btn-dark">Save</button>
      </div>

      <div className="form-content">
        <Input
          name="plotName"
          placeholder="Plot Name"
          onChange={handleChange}
          className="input-primary"
        />
        <Input
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="input-primary"
        />
      </div>

      <div className="form-content">
        <h3 className="form-content-heading heading-optional">Labels</h3>
        <span>Separate each label with a comma i.e. “,”</span>
        <Input
          name="labelsX"
          placeholder="X-Axis Labels"
          onChange={handleChange}
          className="input-primary input-max"
        />
        <Input
          name="labelsY"
          placeholder="Y-Axis Labels"
          onChange={handleChange}
          className="input-primary input-max"
        />
        <Input
          name="labelsZ"
          placeholder="Z-Axis Labels"
          onChange={handleChange}
          className="input-primary input-max"
        />
      </div>

      {Array(numberOfLines)
        .fill(0)
        .map((value, index) => (
          <div key={index}>
            <div className="form-content">
              <h3 className="form-content-heading">Plot {index + 1}</h3>

              <Input
                onChange={(event) => handleArrayChange("plots", index, event)}
                name="label"
                placeholder="Label"
                className="input-primary"
              />

              <div className="color-input">
                <div className="color-container">
                  <span
                    style={{ backgroundColor: data.plots[index].color }}
                    className="color"
                  />
                </div>
                <Input
                  onChange={(event) => handleArrayChange("plots", index, event)}
                  name="color"
                  placeholder="Color"
                  type="color"
                  className="input-primary"
                />
              </div>
            </div>

            <div className="form-content">
              <h3 className="form-content-heading">Values</h3>
              <span>Separate each value in a vertex with a comma i.e. “,”</span>
              <Input
                onChange={(event) => handleArrayChange("plots", index, event)}
                name="vertices"
                placeholder="Vertices (x, y, z)"
                className="input-primary input-max"
              />
              <p className="vertices-data">
                {verticesToString(
                  handleCreateVertices(data.plots[index].vertices, index)
                )}
              </p>
            </div>
          </div>
        ))}

      <div className="form-content">
        <button type="button" onClick={addLine} className="btn-dark">
          Add Line
        </button>
      </div>
    </form>
  );
};

export default Line;
