import validate from "./validate.js";
const validateUrl = (value) => {
  const reg = new RegExp(
  /^(https?:\/\/)?[^\s\/]+\.[^\s\/]+\/\S+\.(jpg|jpeg|png|gif)$/
);
  return validate(reg, value, 5, 50000).map((err) => `url is ${err}`);
};

export default validateUrl;
