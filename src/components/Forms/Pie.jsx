import React from "react";

const Pie = () => {
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
            <path
              d="M25 19.44C24.2641 21.7776 22.8019 23.8195 20.8259 25.269C18.8499 26.7185 16.4631 27.5001 14.0125 27.5C10.9592 27.5 8.03095 26.2871 5.87193 24.1281C3.71292 21.9691 2.5 19.0408 2.5 15.9875C2.49994 13.5369 3.28147 11.1501 4.73098 9.17406C6.1805 7.19806 8.22244 5.73586 10.56 5"
              stroke="#606060"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M27.3913 12.4338C26.7334 10.0911 25.4841 7.95703 23.7636 6.23646C22.043 4.51588 19.9089 3.26665 17.5663 2.60878C15.5113 2.03503 13.75 3.81753 13.75 5.95003V14.3175C13.75 15.3838 14.615 16.2488 15.6813 16.2488H24.0488C26.1825 16.2488 27.965 14.4875 27.3913 12.4338Z"
              stroke="#606060"
              strokeWidth="2.5"
            />
          </svg>

          <h2>Pie Plot</h2>
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
        <h3 className="form-content-heading">Values</h3>

        <input name="name" placeholder="Label" className="input-primary" />
        <input name="value" placeholder="Value" className="input-primary" />

        <div className="color-input">
          <div className="color-container">
            <span className="color" />
          </div>
          <input name="color" placeholder="Color" className="input-primary" />
        </div>
      </div>
      <div className="form-content">
        <button className="btn-dark">Add</button>
      </div>
    </form>
  );
};

export default Pie;
