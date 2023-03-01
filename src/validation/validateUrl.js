import validate from "./validate.js";
const validateUrl = (value) => {
  const reg = new RegExp(
   /^(https?:\/\/)?[^\s\/]+\.[^\s\/]+\/\S+\.(jpg|jpeg|png|gif)$/
  );
  return validate(reg, value, 5, 255).map((err) => `password is ${err}`);
};

export default validateUrl;
