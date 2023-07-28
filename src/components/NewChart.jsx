import { Link } from "react-router-dom";
import React from "react";

const NewChart = () => {
  return (
    <section className="container">
      <div className="create-new-plot">
        <header>
          <h1>Create New Plot</h1>
          <p>Choose the type of plot you want to create</p>
        </header>

        <div className="grid grid-1x2 grid-plot">
          <Link to="/line/new" className="chart-type">
            <div className="chart-logo">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.42859 20.2286H7.68573C7.94919 20.2255 8.20711 20.1525 8.43304 20.0169C8.65897 19.8814 8.84479 19.6882 8.97145 19.4571L14.1143 9.17143C14.2411 8.91534 14.4431 8.70417 14.6934 8.56627C14.9436 8.42837 15.2301 8.37035 15.5143 8.4C15.7974 8.41913 16.0675 8.52558 16.2876 8.70468C16.5076 8.88378 16.6667 9.12671 16.7429 9.4L23.1143 30.6C23.1979 30.8876 23.3698 31.1416 23.6056 31.3262C23.8415 31.5107 24.1294 31.6165 24.4286 31.6286C24.709 31.6193 24.9805 31.5276 25.2091 31.365C25.4377 31.2024 25.6135 30.9761 25.7143 30.7143L29.6286 21.1429C29.7364 20.8744 29.9216 20.644 30.1608 20.4812C30.3999 20.3184 30.6821 20.2304 30.9714 20.2286H38.5714"
                  stroke="#606060"
                  strokeWidth="2.85714"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span>Line</span>
          </Link>

          <Link to="/pie/new" className="chart-type">
            <div className="chart-logo">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.3334 25.92C32.3522 29.0367 30.4026 31.7593 27.768 33.692C25.1333 35.6247 21.9509 36.6668 18.6834 36.6667C14.6123 36.6667 10.708 35.0494 7.82928 32.1708C4.9506 29.2921 3.33337 25.3877 3.33337 21.3167C3.33329 18.0491 4.37533 14.8667 6.30801 12.2321C8.2407 9.59742 10.9633 7.64781 14.08 6.66667"
                  stroke="#606060"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M36.5217 16.5783C35.6445 13.4548 33.9789 10.6093 31.6848 8.31524C29.3907 6.02114 26.5452 4.3555 23.4217 3.47833C20.6817 2.71333 18.3334 5.09 18.3334 7.93333V19.09C18.3334 20.5117 19.4867 21.665 20.9084 21.665H32.065C34.91 21.665 37.2867 19.3167 36.5217 16.5783Z"
                  stroke="#606060"
                  strokeWidth="2.5"
                  idth="2.5"
                />
              </svg>
            </div>
            <span>Pie</span>
          </Link>
        </div>
      </div>

      <p className="footer-text">More charts coming soon...</p>
    </section>
  );
};

export default NewChart;
