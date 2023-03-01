import validate from "./validate.js";
const validateDete = (value) => {
  const reg = new RegExp(
   "^\d{4}-\d{2}-\d{2}$"
  );
  return validate(reg, value, 5, 255).map((err) => `email is ${err}`);
};

export default validateDete;
