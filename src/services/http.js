import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api";

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) alert("An unexpected error occured!");

    return Promise.reject(error);
  }
);

const http = {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
};

export default http;
