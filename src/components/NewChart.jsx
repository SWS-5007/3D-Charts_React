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

        <div className="grid grid-1x4 grid-plot">
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

          <Link to="/plot/new" className="chart-type">
            <div className="chart-logo">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6.66667C10.4421 6.66667 10.866 6.84226 11.1786 7.15482C11.4911 7.46738 11.6667 7.89131 11.6667 8.33333V31.6667C11.6667 32.1087 11.4911 32.5326 11.1786 32.8452C10.866 33.1577 10.4421 33.3333 10 33.3333C9.55801 33.3333 9.13409 33.1577 8.82153 32.8452C8.50897 32.5326 8.33337 32.1087 8.33337 31.6667V8.33333C8.33337 7.89131 8.50897 7.46738 8.82153 7.15482C9.13409 6.84226 9.55801 6.66667 10 6.66667ZM30 13.3333C30.4421 13.3333 30.866 13.5089 31.1786 13.8215C31.4911 14.1341 31.6667 14.558 31.6667 15V31.6667C31.6667 32.1087 31.4911 32.5326 31.1786 32.8452C30.866 33.1577 30.4421 33.3333 30 33.3333C29.558 33.3333 29.1341 33.1577 28.8215 32.8452C28.509 32.5326 28.3334 32.1087 28.3334 31.6667V15C28.3334 14.558 28.509 14.1341 28.8215 13.8215C29.1341 13.5089 29.558 13.3333 30 13.3333ZM20 20C20.4421 20 20.866 20.1756 21.1786 20.4882C21.4911 20.8007 21.6667 21.2246 21.6667 21.6667V31.6667C21.6667 32.1087 21.4911 32.5326 21.1786 32.8452C20.866 33.1577 20.4421 33.3333 20 33.3333C19.558 33.3333 19.1341 33.1577 18.8215 32.8452C18.509 32.5326 18.3334 32.1087 18.3334 31.6667V21.6667C18.3334 21.2246 18.509 20.8007 18.8215 20.4882C19.1341 20.1756 19.558 20 20 20Z"
                  fill="#606060"
                />
              </svg>
            </div>
            <span>Bar</span>
          </Link>

          <Link to="/lines/new" className="chart-type">
            <div className="chart-logo">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.9375 32.5C35.9375 32.7486 35.8387 32.9871 35.6629 33.1629C35.4871 33.3387 35.2486 33.4375 35 33.4375H5C4.75136 33.4375 4.5129 33.3387 4.33709 33.1629C4.16127 32.9871 4.0625 32.7486 4.0625 32.5V7.5C4.0625 7.25136 4.16127 7.0129 4.33709 6.83709C4.5129 6.66127 4.75136 6.5625 5 6.5625C5.24864 6.5625 5.4871 6.66127 5.66291 6.83709C5.83873 7.0129 5.9375 7.25136 5.9375 7.5V31.5625H35C35.2486 31.5625 35.4871 31.6613 35.6629 31.8371C35.8387 32.0129 35.9375 32.2514 35.9375 32.5ZM20.625 24.6875C20.934 24.6875 21.2361 24.5959 21.4931 24.4242C21.75 24.2525 21.9503 24.0085 22.0686 23.7229C22.1868 23.4374 22.2178 23.1233 22.1575 22.8202C22.0972 22.5171 21.9484 22.2387 21.7299 22.0201C21.5113 21.8016 21.2329 21.6528 20.9298 21.5925C20.6267 21.5322 20.3126 21.5632 20.0271 21.6814C19.7415 21.7997 19.4975 22 19.3258 22.2569C19.1541 22.5139 19.0625 22.816 19.0625 23.125C19.0625 23.5394 19.2271 23.9368 19.5201 24.2299C19.8132 24.5229 20.2106 24.6875 20.625 24.6875ZM16.875 15.9375C17.184 15.9375 17.4861 15.8459 17.7431 15.6742C18 15.5025 18.2003 15.2585 18.3186 14.9729C18.4368 14.6874 18.4678 14.3733 18.4075 14.0702C18.3472 13.7671 18.1984 13.4887 17.9799 13.2701C17.7613 13.0516 17.4829 12.9028 17.1798 12.8425C16.8767 12.7822 16.5626 12.8132 16.2771 12.9314C15.9915 13.0497 15.7475 13.25 15.5758 13.5069C15.4041 13.7639 15.3125 14.066 15.3125 14.375C15.3125 14.7894 15.4771 15.1868 15.7701 15.4799C16.0632 15.7729 16.4606 15.9375 16.875 15.9375ZM11.875 27.1875C12.184 27.1875 12.4861 27.0959 12.7431 26.9242C13 26.7525 13.2003 26.5085 13.3186 26.2229C13.4368 25.9374 13.4678 25.6233 13.4075 25.3202C13.3472 25.0171 13.1984 24.7387 12.9799 24.5201C12.7613 24.3016 12.4829 24.1528 12.1798 24.0925C11.8767 24.0322 11.5626 24.0632 11.2771 24.1814C10.9915 24.2997 10.7475 24.5 10.5758 24.7569C10.4041 25.0139 10.3125 25.316 10.3125 25.625C10.3125 26.0394 10.4771 26.4368 10.7701 26.7299C11.0632 27.0229 11.4606 27.1875 11.875 27.1875ZM26.875 19.6875C27.184 19.6875 27.4861 19.5959 27.7431 19.4242C28 19.2525 28.2003 19.0085 28.3186 18.7229C28.4368 18.4374 28.4678 18.1233 28.4075 17.8202C28.3472 17.5171 28.1984 17.2387 27.9799 17.0201C27.7613 16.8016 27.4829 16.6528 27.1798 16.5925C26.8767 16.5322 26.5626 16.5632 26.2771 16.6814C25.9915 16.7997 25.7475 17 25.5758 17.2569C25.4041 17.5139 25.3125 17.816 25.3125 18.125C25.3125 18.5394 25.4771 18.9368 25.7701 19.2299C26.0632 19.5229 26.4606 19.6875 26.875 19.6875ZM30.625 13.4375C30.934 13.4375 31.2361 13.3459 31.4931 13.1742C31.75 13.0025 31.9503 12.7585 32.0686 12.4729C32.1868 12.1874 32.2178 11.8733 32.1575 11.5702C32.0972 11.2671 31.9484 10.9887 31.7299 10.7701C31.5113 10.5516 31.2329 10.4028 30.9298 10.3425C30.6267 10.2822 30.3126 10.3132 30.0271 10.4314C29.7415 10.5497 29.4975 10.75 29.3258 11.0069C29.1541 11.2639 29.0625 11.566 29.0625 11.875C29.0625 12.2894 29.2271 12.6868 29.5201 12.9799C29.8132 13.2729 30.2106 13.4375 30.625 13.4375ZM29.375 24.0625C29.066 24.0625 28.7639 24.1541 28.5069 24.3258C28.25 24.4975 28.0497 24.7415 27.9314 25.0271C27.8132 25.3126 27.7822 25.6267 27.8425 25.9298C27.9028 26.2329 28.0516 26.5113 28.2701 26.7299C28.4887 26.9484 28.7671 27.0972 29.0702 27.1575C29.3733 27.2178 29.6874 27.1868 29.9729 27.0686C30.2585 26.9503 30.5025 26.75 30.6742 26.4931C30.8459 26.2361 30.9375 25.934 30.9375 25.625C30.9375 25.2106 30.7729 24.8132 30.4799 24.5201C30.1868 24.2271 29.7894 24.0625 29.375 24.0625Z"
                  fill="#606060"
                />
              </svg>
            </div>
            <span>Scatter</span>
          </Link>
        </div>
      </div>

      {/* <p className="footer-text">
        Don't know how to get started?{" "}
        <a href="#" className="link-primary">
          Click here
        </a>
      </p> */}
    </section>
  );
};

export default NewChart;
