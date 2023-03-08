import Property from "../models/Property.js";

let id = 1;
let nextUserId = 1;

const createData = () => {
  let propertiesArr = [
    new Property(
      id++,
      "The Golden Road",
      "The golden path in a pastoral landscape",
      "This image shows a snow-capped mountain range in the background and a clear river or lake in the foreground. The water reflects the trees lining the shore and the sky is partly cloudy. The overall feeling is one of peacefulness and natural beauty.",
      1200,
      `Zipi gold`,
      "12/1/2021",
      "https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ),
    new Property(
      id++,
      "Snow Mountain",
      "Snow Mountain with some growth",
      "A crazy mountain landscape wrapped in white snow that covers most of the mountain and a gray sky that characterizes the winter period",
      800,
      `Malki Shfer`,
      "13/4/2019",
      "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ),
    new Property(
      id++,
      "air balloons",
      "air balloons",
      "The picture depicts a group of hot air balloons of various shapes and colors in the sky. The bright blue sky and a few white clouds form the background of the image. The overall atmosphere of the scene is peaceful and serene.",
      3560,
      `yahakov zave`,
      "9/11/2023",
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
