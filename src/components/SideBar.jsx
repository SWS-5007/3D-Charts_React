import React from "react";
import { MdEdit } from "react-icons/md";
import { AiOutlineMore, AiFillCamera, AiFillSave } from "react-icons/ai";

const SideBar = () => {
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
          <h4 className="text-lighter">Show Axis</h4>
          <span>Shows the XYZ axes on the chart </span>
        </div>
        <input type="checkbox" name="" id=""></input>
      </div>
      <div className="plot-setting">
        <div>
          <h4 className="text-lighter">Vertices</h4>
          <span>SShows the value of each vertex of graph</span>
        </div>
        <input type="checkbox" name="" id=""></input>
      </div>

      <h3 className="aside-heading">Chart Settings</h3>

      <div className="plot-setting">
        <div>
          <h4 className="text-lighter">Font Size</h4>
          <span>Change font-size of vertices</span>
        </div>
        <input
          className="input-chart"
          type="number"
          name=""
          value={15}
          id=""
        ></input>
      </div>
      <div className="plot-setting">
        <div>
          <h4 className="text-lighter">Add Data</h4>
          <span>Add more to existing data</span>
        </div>
        <button>
          <MdEdit />
        </button>
      </div>

      <div className="plot-setting">
        <div>
          <h4 className="text-lighter">Look at</h4>
          <span>Align the camera to selected vertex</span>
        </div>
        <input className="input-chart" value={"5,5,6"} name="" id=""></input>
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

      <h3 className="aside-heading">Other Options</h3>

      <div className="plot-setting">
        <div className="icon-text-container">
          <AiFillCamera size={24} color="#606060" />
          <div>
            <h4 className="text-lighter">Capture</h4>
            <span>Captures plot image</span>
          </div>
        </div>
      </div>
      <div className="plot-setting">
        <div className="icon-text-container">
          <AiFillSave size={24} color="#606060" />
          <div>
            <h4 className="text-lighter">Save</h4>
            <span>Saves the plot data</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
