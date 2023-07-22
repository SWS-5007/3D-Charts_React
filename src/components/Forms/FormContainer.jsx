import React from "react";
import Line from "./Line";
import Pie from "./Pie";
import queryString from "query-string";
import useForm from "../../hooks/useForm";

const FormContainer = () => {
  const search = queryString.parse(window.location.search);

  return (
    <>
      {search.type === "line" && <Line />}
      {search.type === "pie" && <Pie />}
    </>
  );
};

export default FormContainer;
