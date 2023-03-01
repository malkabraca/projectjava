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
       "https://litb-cgis.rightinthebox.com/images/640x640/202103/bps/product/inc/khwcno1616755327092.jpg"
    ),
    new Property(
      id++,
      "title",
      "Kenny's house subtitle",
      "Kenny's house description",
      8.12,
      `Groge w Bosh credit`,
      "8.12 createdAt",
       "https://images.squarespace-cdn.com/content/v1/5a7c0544d74cffa3a6ce66b3/1608482750877-VQE2XI09QEHZZIVGLTJH/%D7%A0%D7%99%D7%A8+%D7%A8%D7%95%D7%99%D7%98%D7%9E%D7%9F+%D7%91%D7%A9%D7%95%D7%95%D7%99%D7%A5+-+%D7%9C%D7%A6%D7%99%D7%93%D7%99+%D7%94%D7%AA%D7%9E%D7%95%D7%A0%D7%AA+%D7%A0%D7%95%D7%A3+%D7%A9%D7%A6%D7%99%D7%9C%D7%9E%D7%AA%D7%99+%D7%91%D7%90%D7%95%D7%AA%D7%95+%D7%9E%D7%A7%D7%95%D7%9D.jpg?format=2500wg"
    ),
    new Property(
      id++,
      "title",
      "Kenny's house subtitle",
      "Kenny's house description",
      8.12,
      `Groge w Bosh credit`,
      "8.12 createdAt",
       "https://litb-cgis.rightinthebox.com/images/640x640/202103/bps/product/inc/khwcno1616755327092.jpg"
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
