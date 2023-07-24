import React from "react";
import { AiOutlineMore } from "react-icons/ai";

const SideBar = ({
  showVertices,
  onShowVertices,
  fontSize,
  onFontSizeChange,
}) => {
  return (
    <aside>
      <h3>View Settings</h3>
      <div className="plot-setting">
        <div>
          <h4 className="text-lighter">Align View</h4>
          <span>Select the axis to align with camera</span>
        </div>
        <select className="input-chart" name="" id=""></select>
      </div>

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
          max={1}
          step={0.05}
        ></input>
      </div>

      <div className="plot-setting">
        <div>
          <h4 className="text-lighter">Look at</h4>
          <span>Align the camera to selected vertex</span>
        </div>
        <input className="input-chart" name="" id=""></input>
      </div>

      <h3 className="aside-heading">Chart Data</h3>

      <div className="plot-setting">
        <div className="icon-text-container">
          <span className="color" />
          <div>
            <h4 className="text-lighter">Label 1</h4>
            <span>The description of label 1</span>
          </div>
        </div>
        <AiOutlineMore size={24} />
      </div>

      <div className="plot-setting">
        <div className="icon-text-container">
          <span className="color" />
          <div>
            <h4 className="text-lighter">Label 2</h4>
            <span>The description of label 2</span>
          </div>
        </div>
        <AiOutlineMore size={24} />
      </div>
    </aside>
  );
};

export default SideBar;
