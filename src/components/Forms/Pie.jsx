import React, { useEffect, useState } from "react";
import Input from "../common/Input";
import {
  createPieChart,
  getPieChart,
  initialData,
  updatePieChart,
} from "../../services/pie-chart";
import useForm from "../../hooks/useForm";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Pie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [valuesCount, setValuesCount] = useState(1);
  const { data, setData, errors, setErrors, handleChange, handleArrayChange } =
    useForm(initialData);

  const fetchPieChart = async () => {
    try {
      const { data: chart } = await getPieChart(id);
      delete chart.__v;
      setData(chart);
      setValuesCount(chart.values.length);
    } catch (error) {
      toast.error("Chart with given ID was not found");
    }
  };

  useEffect(() => {
    if (id !== "new") fetchPieChart();
  }, [id]);

  const handleValuesCount = () => {
    const copiedData = { ...data };
    data.values.push({ label: "", value: "", color: "" });
    setData(copiedData);
    setValuesCount(valuesCount + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        />
        <Input
          onChange={handleChange}
          value={data["description"]}
          name="description"
          placeholder="Description"
          className="input-primary"
        />
      </div>

      {Array(valuesCount)
        .fill(0)
        .map((value, index) => (
          <div className="form-content">
            <h3 className="form-content-heading">Value {index + 1}</h3>

            <Input
              onChange={(e) => handleArrayChange("values", index, e)}
              value={data.values[index]["label"]}
              name="label"
              placeholder="Label"
              className="input-primary"
            />
            <Input
              onChange={(e) => handleArrayChange("values", index, e)}
              value={data.values[index]["value"]}
              name="value"
              placeholder="Value"
              className="input-primary"
            />

            <div className="color-input">
              <div className="color-container">
                <span className="color" />
              </div>
              <Input
                type={"color"}
                onChange={(e) => handleArrayChange("values", index, e)}
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
          Add
        </button>
      </div>
    </form>
  );
};

export default Pie;
