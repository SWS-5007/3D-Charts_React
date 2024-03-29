import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Joi from "joi-browser";
import React, { useCallback, useEffect, useState } from "react";

import Input from "../common/Input";
import useForm from "../../hooks/useForm";
import {
  createPieChart,
  getPieChart,
  initialData,
  updatePieChart,
} from "../../services/pie-chart";

const pieValueValidationSchema = {
  color: Joi.string().max(55).required().label("Color"),
  label: Joi.string().max(55).required().label("Label"),
  value: Joi.number().required().label("Value"),
};

const schema = {
  description: Joi.string().allow("").max(155).required().label("Description"),
  name: Joi.string().max(55).required().label("Name"),
  values: Joi.array()
    .items(pieValueValidationSchema)
    .required()
    .label("Values"),
};

const Pie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [valuesCount, setValuesCount] = useState(1);
  const {
    data,
    errors,
    handleArrayChange,
    handleChange,
    setData,
    setErrors,
    validate,
  } = useForm(initialData, schema);

  const fetchPieChart = useCallback(async () => {
    try {
      const { data: chart } = await getPieChart(id);
      delete chart.__v;
      setData(chart);
      setValuesCount(chart.values.length);
      setErrors({ values: Array(chart.lines.length).fill({}) });
    } catch (error) {
      toast.error("Chart with given ID was not found");
    }
  }, [id, setData]);

  useEffect(() => {
    if (id !== "new") fetchPieChart();
  }, [id, fetchPieChart]);

  const handleValuesCount = () => {
    const copiedData = { ...data };
    data.values.push({ label: "", value: "", color: "#000000" });
    setData(copiedData);
    setValuesCount(valuesCount + 1);

    const copiedErrors = { ...errors };
    copiedErrors.values.push({});
    setErrors(copiedErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors(errors || {});
    for (let error in errors) {
      toast.error(`${error}: ${errors[error]}`);
    }
    if (errors) return;

    const chart = { ...data };
    const id = chart._id;

    try {
      if (id) {
        delete chart._id;
        await updatePieChart(id, chart);
        navigate(`/plot/${id}/?type=pie`);
      } else {
        const { data: chart } = await createPieChart(data);
        navigate(`/plot/${chart._id}/?type=pie`);
      }
    } catch (error) {
      console.log(error);
    }
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
        <Input
          onChange={handleChange}
          value={data["name"]}
          name="name"
          placeholder="Plot Name"
          className="input-primary"
          error={errors["name"]}
        />
        <Input
          onChange={handleChange}
          value={data["description"]}
          name="description"
          placeholder="Description"
          className="input-primary"
          error={errors["description"]}
        />
      </div>

      {Array(valuesCount)
        .fill(0)
        .map((value, index) => (
          <div key={index} className="form-content">
            <h3 className="form-content-heading">Value {index + 1}</h3>

            <Input
              onChange={(e) =>
                handleArrayChange("values", index, e, pieValueValidationSchema)
              }
              value={data.values[index]["label"]}
              name="label"
              placeholder="Label"
              className="input-primary"
              error={
                errors["values"] &&
                errors["values"]["index"] &&
                errors["values"][index]["label"]
              }
            />
            <Input
              onChange={(e) =>
                handleArrayChange("values", index, e, pieValueValidationSchema)
              }
              value={data.values[index]["value"]}
              name="value"
              placeholder="Value"
              className="input-primary"
              error={
                errors["values"] &&
                errors["values"]["index"] &&
                errors["values"][index]["value"]
              }
            />

            <div className="color-input">
              <div className="color-container">
                <span
                  style={{ backgroundColor: data.values[index].color }}
                  className="color"
                />
              </div>
              <input
                type={"color"}
                onChange={(e) =>
                  handleArrayChange(
                    "values",
                    index,
                    e,
                    pieValueValidationSchema
                  )
                }
                value={data.values[index]["color"]}
                name="color"
                placeholder="Color"
                className="input-primary"
              />
            </div>
          </div>
        ))}

      <div className="form-content">
        <button type="button" onClick={handleValuesCount} className="btn-dark">
          Add New
        </button>
      </div>
    </form>
  );
};

export default Pie;
