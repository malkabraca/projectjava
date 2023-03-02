import Property from "../models/Property.js";

let id = 1;
let nextUserId = 1;

const createData = () => {
  let propertiesArr = [
    new Property(
      id++,
      "title",
      "Kenny's house subtitle",
      "Kenny's house description",
      8.12,
      `Groge w Bosh credit`,
      "8.12 createdAt",
       "https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ),
    new Property(
      id++,
      "title",
      "Kenny's house subtitle",
      "Kenny's house description",
      8.12,
      `Groge w Bosh credit`,
      "8.12 createdAt",
      "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ),
    new Property(
      id++,
      "title",
      "Kenny's house subtitle",
      "Kenny's house description",
      8.12,
      `Groge w Bosh credit`,
      "8.12 createdAt",
       "https://images.pexels.com/photos/8138726/pexels-photo-8138726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ),
  ];
  return propertiesArr;
};

const setInitialData = () => {
  let properties = localStorage.getItem("props");
  if (properties) {
    return;
  }
  localStorage.setItem("props", JSON.stringify(createData()));
  localStorage.setItem("nextid", id + "");
  localStorage.setItem("nextUserId", nextUserId + "");
};

setInitialData();
