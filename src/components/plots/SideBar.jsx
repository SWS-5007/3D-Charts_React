import React from "react";

const SideBar = ({
  showVertices,
  onShowVertices,
  fontSize,
  onFontSizeChange,
  type,
  lineChart,
  pieChart,
  onAlignAxis,
}) => {
  const total = pieChart.values.reduce((a, b) => (a += b.value), 0);

  return (
    <aside>
      <h3>View Settings</h3>
      <div className="plot-setting">
        <div>
          <h4 className="text-lighter">Align View</h4>
          <span>Select the axis to align with camera</span>
        </div>
        <select
          onChange={onAlignAxis}
          className="input-chart"
          name="alignAxis"
          id="alignAxis"
        >
          <option value={""}></option>
          <option value={"X"}>+X</option>
          <option value={"Y"}>+Y</option>
          <option value={"Z"}>+Z</option>
          <option value={"-X"}>-X</option>
          <option value={"-Y"}>-Y</option>
          <option value={"-Z"}>-Z</option>
        </select>
      </div>

      {!pieChart._id && (
        <div className="plot-setting">
          <div>
            <h4 className="text-lighter">Vertices</h4>
            <span>Shows the value of each vertex of graph</span>
          </div>
          <input
            checked={showVertices}
            onChange={(event) => onShowVertices(event)}
            type="checkbox"
            name="showVertices"
            id="showVertices"
          />
        </div>
      )}

      <h3 className="aside-heading">Chart Settings</h3>

      <div className="plot-setting">
        <div>
          <h4 className="text-lighter">Font Size</h4>
          <span>Change font-size of vertices</span>
        </div>
        <input
          value={fontSize}
          onChange={(e) => onFontSizeChange(e)}
          className="input-chart"
          type="number"
          name="fontSize"
          id="fontSize"
          min={0}
          max={1.5}
          step={0.05}
        ></input>
      </div>

      <h3 className="aside-heading">Chart Data</h3>

      {type === "line" &&
        lineChart.lines.map((line, index) => (
          <div key={line.label + index} className="plot-setting">
            <div className="icon-text-container">
              <span style={{ backgroundColor: line.color }} className="color" />
              <div>
                <h4 className="text-lighter">{line.label}</h4>
              </div>
            </div>
            {/* <AiOutlineMore size={24} /> */}
          </div>
        ))}

      {type === "pie" &&
        pieChart.values.map((value, index) => (
          <div key={value.label + index} className="plot-setting">
            <div className="icon-text-container">
              <span
                style={{ backgroundColor: value.color }}
                className="color"
              />
              <div>
                <h4 className="text-lighter">{value.label}</h4>
                <span>
                  Value: {value.value} | Percentage:{" "}
                  {((value.value * 100) / total).toFixed(2)}%
                </span>
              </div>
            </div>
            {/* <AiOutlineMore size={24} /> */}
          </div>
        ))}
    </aside>
  );
};

export default SideBar;
