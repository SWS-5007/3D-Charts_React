import Joi from "joi-browser";
import { useState } from "react";

export default function useForm(initialData, schema) {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({ lines: [{}], values: [{}] });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (schema) {
      const propertySchema = Joi.object({ [name]: schema[name] });
      const { error } = Joi.validate({ [name]: value }, propertySchema, {
        abortEarly: false,
      });
      if (error) errors[name] = error.details[0].message;
      else delete errors[name];
    }

    const copiedData = { ...data };
    copiedData[name] = value;
    setData(copiedData);
  };

  const handleArrayChange = (array, index, event, schema) => {
    const { name, value } = event.target;

    const propertySchema = Joi.object({ [name]: schema[name] });
    const { error } = Joi.validate({ [name]: value }, propertySchema, {
      abortEarly: false,
    });
    if (error) errors[array][index][name] = error.details[0].message;
    else delete errors[array][index][name];

    const copiedData = { ...data };
    copiedData[array][index][name] = value;
    setData(copiedData);
  };

  const validate = (data) => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
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
