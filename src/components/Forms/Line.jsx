import React from "react";

const Line = () => {
  return (
    <form>
      <div className="form-header">
        <div className="form-heading">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_6_198)">
              <path
                d="M1.07153 15.1714H5.76439C5.96199 15.1692 6.15542 15.1144 6.32487 15.0127C6.49432 14.9111 6.63368 14.7661 6.72868 14.5929L10.5858 6.87858C10.6809 6.68652 10.8324 6.52814 11.0201 6.42471C11.2078 6.32129 11.4227 6.27777 11.6358 6.30001C11.8481 6.31436 12.0507 6.3942 12.2158 6.52852C12.3808 6.66284 12.5001 6.84504 12.5572 7.05001L17.3358 22.95C17.3985 23.1657 17.5274 23.3562 17.7043 23.4946C17.8812 23.6331 18.0971 23.7124 18.3215 23.7214C18.5318 23.7145 18.7354 23.6457 18.9069 23.5238C19.0784 23.4018 19.2102 23.2321 19.2858 23.0357L22.2215 15.8572C22.3024 15.6558 22.4413 15.483 22.6207 15.3609C22.8 15.2388 23.0117 15.1728 23.2287 15.1714H28.9287"
                stroke="#606060"
                stroke-width="2.85714"
                stroke-linecap="round"
                stroke-linejoin="round"
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
        <input
          name="plot_name"
          placeholder="Plot Name"
          className="input-primary"
        />
        <input
          name="description"
          placeholder="Description"
          className="input-primary"
        />
      </div>

      <div className="form-content">
        <h3 className="form-content-heading heading-optional">Labels</h3>
        <span>Separate each label with a comma i.e. “,”</span>
        <input
          name="x_labels"
          placeholder="X-Axis Labels"
          className="input-primary input-max"
        />
        <input
          name="y_labels"
          placeholder="Y-Axis Labels"
          className="input-primary input-max"
        />
        <input
          name="z_labels"
          placeholder="Z-Axis Labels"
          className="input-primary input-max"
        />
      </div>

      <div className="form-content">
        <h3 className="form-content-heading">Plot 1</h3>

        <input name="plot_name" placeholder="Label" className="input-primary" />

        <div className="color-input">
          <div className="color-container">
            <span className="color" />
          </div>
          <input name="color" placeholder="Color" className="input-primary" />
        </div>
      </div>

      <div className="form-content">
        <h3 className="form-content-heading">Values</h3>
        <span>Separate each value in a vertex with a comma i.e. “,”</span>
        <input
          name="vertices"
          placeholder="Vertices (x, y, z)"
          className="input-primary"
        />
        <p className="vertices-data">(1, 2, 2), (2, 4, 2)</p>
      </div>

      <div className="form-content">
        <h3 className="form-content-heading heading-optional">
          Values in Array
        </h3>
        <span>Paste array of vertex arrays</span>
        <textarea
          name="vertices"
          placeholder="Vertices (x, y, z)"
          className="input-primary input-max"
          rows={10}
        />
      </div>
      <div className="form-content">
        <button className="btn-dark">Add Line</button>
      </div>
    </form>
  );
};

export default Line;
