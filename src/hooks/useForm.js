import Joi from "joi-browser";
import { useState } from "react";

export default function useForm(initialData, schema) {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    if (schema) {
      const schema = { [name]: schema[name] };

      const { error } = Joi.validate({ [name]: value }, schema);
      if (error) errors[name] = error.details[0].message;
      else delete errors[name];
    }

    const copiedData = { ...data };
    copiedData[name] = value;
    setData(copiedData);
  };

  const handleArrayChange = (array, index, event) => {
    const { name, value } = event.target;
    const copiedData = { ...data };
    copiedData[array][index][name] = value;
    setData(copiedData);
  };

  const validate = () => {
    const { error } = Joi.validate(data, schema, { abortEarly: false });
    if (!error) return;

    console.log(error);
  };

  return {
    data,
    setData,
    errors,
    setErrors,
    handleChange,
    handleArrayChange,
    validate,
  };
}
