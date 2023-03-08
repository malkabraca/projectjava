import Property from "../models/Property.js";
import getNextId from "../utils/getNextId.js";

let selectedProperty, editProperty;
const informationImgPopupImgDisplay = document.getElementById(
  "informationImgPopupImgDisplay"
);
const informationImgPopupTitle = document.getElementById(
  "informationImgPopupTitle"
);
const informationImgPopupSubtitle = document.getElementById(
  "informationImgPopupSubtitle"
);
const informationImgPopupDescription = document.getElementById(
  "informationImgPopupDescription"
);
const informationImgPopupPrice = document.getElementById(
  "informationImgPopupSubPrice"
);
const informationImgPopupCredit = document.getElementById(
  "informationImgPopupCredit"
);
const informationImgPopupCreatedAt = document.getElementById(
  "informationImgPopupCreatedAt"
);
const informationImgPopupImg = document.getElementById(
  "informationImgPopupImgUrl"
);
const informationImgPopup = document.getElementById("informationImgPopup");

const initPopupInpor = (
  selectedPropertyFromHomePage,
  editPropertyFromHomePage
) => {
  if (selectedPropertyFromHomePage) {
    selectedProperty = selectedPropertyFromHomePage;
  } else {
    selectedProperty = new Property(
      getNextId(),
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    );
  }
  editProperty = editPropertyFromHomePage;
  informationImgPopupImgDisplay.src = selectedProperty.imgUrl;
  informationImgPopupTitle.value = selectedProperty.title;
  informationImgPopupSubtitle.value = selectedProperty.subtitle;
  informationImgPopupDescription.value = selectedProperty.description;
  informationImgPopupPrice.value = selectedProperty.price;
  informationImgPopupCredit.value = selectedProperty.credit;
  informationImgPopupCreatedAt.value = selectedProperty.createdAt;
  informationImgPopupImg.value = selectedProperty.imgUrl;
  showPopup();
};

const showPopup = () => {
  informationImgPopup.classList.remove("d-none");
};

const hidePopup = () => {
  informationImgPopup.classList.add("d-none");
};

window.addEventListener("load", () => {
  informationImgPopup.addEventListener("click", (ev) => {
    if (
      ev.target.id !== "informationImgPopup" &&
      ev.target.id !== "informationImgPopupCancelBtn" &&
      ev.target.id !== "informationImgPopupCancelBtnIcon"
    ) {
      return;
    }
    hidePopup();
  });

  informationImgPopupImg.addEventListener("input", () => {
    informationImgPopupImgDisplay.src = informationImgPopupImg.value;
  });
});

export { initPopupInpor, showPopup, hidePopup };
