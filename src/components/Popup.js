import Property from "../models/Property.js";
import getNextId from "../utils/getNextId.js";
import validateNumber from "../validation/validateNumber.js";
import validateString from "../validation/validateString.js";
import validateUrl from "../validation/validateUrl.js";

let selectedProperty, editProperty;
const editPropertiesPopupImgDisplay = document.getElementById(
  "editPropertiesPopupImgDisplay"
);
const editPropertiesPopupTitle = document.getElementById(
  "editPropertiesPopupTitle"
);
const editPropertiesPopupSubtitle = document.getElementById(
  "editPropertiesPopupSubtitle"
);
const editPropertiesPopupDescription = document.getElementById(
  "editPropertiesPopupDescription"
);
const editPropertiesPopupPrice = document.getElementById(
  "editPropertiesPopupSubPrice"
);
const editPropertiesPopupCredit = document.getElementById(
  "editPropertiesPopupCredit"
);
const editPropertiesPopupCreatedAt = document.getElementById(
  "editPropertiesPopupCreatedAt"
);
const editPropertiesPopupImg = document.getElementById(
  "editPropertiesPopupImgUrl"
);
const editPropertiesPopup = document.getElementById("editPropertiesPopup");
const PopupSaveBtn = document.getElementById("editPropertiesPopupSaveBtn");

const initPopup = (selectedPropertyFromHomePage, editPropertyFromHomePage) => {
  /*
    set data from selectedProperty to html
    */
  if (selectedPropertyFromHomePage) {
    selectedProperty = selectedPropertyFromHomePage;
  } else {
    selectedProperty = new Property(getNextId(), "", "", "", "","","","","");
  }
  editProperty = editPropertyFromHomePage;
  editPropertiesPopupImgDisplay.src = selectedProperty.imgUrl;
  editPropertiesPopupTitle.value = selectedProperty.title;
  editPropertiesPopupSubtitle.value = selectedProperty.subtitle;
  editPropertiesPopupDescription.value = selectedProperty.description;
  editPropertiesPopupPrice.value = selectedProperty.price;
  editPropertiesPopupCredit.value = selectedProperty.Credit;
  editPropertiesPopupCreatedAt.value = selectedProperty.createdAt;
  editPropertiesPopupImg.value = selectedProperty.imgUrl;
  showPopup();
};

let titleOk = false;
let subtitleOk = false;
let descriptionOk = false;
let priceOk = false;
let creditOk = false;
let createdAtOK  = false;
let imgUrlOk = false;

const checkIfCanEnableBtn = () => {
  PopupSaveBtn.disabled = !(
    titleOk &&
    subtitleOk &&
    descriptionOk &&
    priceOk &&
    creditOk &&
    createdAtOK &&
    imgUrlOk
  );
};
editPropertiesPopupTitle.addEventListener("input", () => {
  checkTitleString();
});
editPropertiesPopupSubtitle.addEventListener("input", () => {
  checkSubtitleString();
});
editPropertiesPopupDescription.addEventListener("input", () => {
  checkDescriptionString();
});
editPropertiesPopupPrice.addEventListener("input", () => {
  checkPriceNumber ();
});
editPropertiesPopupCredit.addEventListener("input", () => {
  checkCreditString ();
});
editPropertiesPopupCreatedAt.addEventListener("input", () => {
  checkCreatedAtNumber ();
});
editPropertiesPopupImg.addEventListener("input", () => {
  checkImgUrlOkUrl ();
});
const checkImgUrlOkUrl = () => {
  let errorArr = validateUrl(editPropertiesPopupImg.value);
  if (errorArr.length === 0 || editPropertiesPopupImg  === "") {
    editPropertiesPopupImg.classList.remove("is-invalid");
    document.getElementById("alert-imgUrl").classList.add("d-none");
    imgUrlOk = true;
    console.log(imgUrlOk);
  } else {
    //the text is not ok
    editPropertiesPopupImg.classList.add("is-invalid");
    document.getElementById("alert-imgUrl").classList.remove("d-none");
    imgUrlOk = false;
    console.log(imgUrlOk);
  }
  checkIfCanEnableBtn();
};
const checkCreatedAtNumber = () => {
  let errorArr = validateNumber(editPropertiesPopupCreatedAt.value);
  if (errorArr.length === 0 || editPropertiesPopupCreatedAt  === "") {
    editPropertiesPopupCreatedAt.classList.remove("is-invalid");
    document.getElementById("alert-CreatedAt").classList.add("d-none");
    createdAtOK = true;
  } else {
    //the text is not ok
    editPropertiesPopupCreatedAt.classList.add("is-invalid");
    document.getElementById("alert-CreatedAt").classList.remove("d-none");
    createdAtOK = false;
  }
  checkIfCanEnableBtn();
};
const checkCreditString = () => {
  let errorArr = validateString(editPropertiesPopupCredit.value);
  if (errorArr.length === 0 || editPropertiesPopupCredit === "") {
    editPropertiesPopupCredit.classList.remove("is-invalid");
    document.getElementById("alert-credit").classList.add("d-none");
    creditOk = true;
  } else {
    //the text is not ok
    editPropertiesPopupCredit.classList.add("is-invalid");
    document.getElementById("alert-credit").classList.remove("d-none");
    creditOk = false;
  }
  checkIfCanEnableBtn();
};
const checkPriceNumber = () => {
  let errorArr = validateNumber(editPropertiesPopupPrice.value);
  if (errorArr.length === 0 || editPropertiesPopupPrice  === "") {
    editPropertiesPopupPrice.classList.remove("is-invalid");
    document.getElementById("alert-price").classList.add("d-none");
    priceOk = true;
  } else {
    //the text is not ok
    editPropertiesPopupPrice.classList.add("is-invalid");
    document.getElementById("alert-price").classList.remove("d-none");
    priceOk = false;
  }
  checkIfCanEnableBtn();
};
const checkDescriptionString = () => {
  let errorArr = validateString(editPropertiesPopupDescription.value);
  if (errorArr.length === 0 || editPropertiesPopupDescription  === "") {
    editPropertiesPopupDescription.classList.remove("is-invalid");
    document.getElementById("alert-description").classList.add("d-none");
    descriptionOk = true;
  } else {
    //the text is not ok
    editPropertiesPopupDescription.classList.add("is-invalid");
    document.getElementById("alert-description").classList.remove("d-none");
    descriptionOk = false;
  }
  checkIfCanEnableBtn();
};
const checkSubtitleString = () => {
  let errorArr = validateString(editPropertiesPopupSubtitle.value);
  if (errorArr.length === 0 || editPropertiesPopupSubtitle  === "") {
    editPropertiesPopupSubtitle .classList.remove("is-invalid");
    document.getElementById("alert-subtitle").classList.add("d-none");
    subtitleOk = true;
  } else {
    //the text is not ok
    editPropertiesPopupSubtitle.classList.add("is-invalid");
    document.getElementById("alert-subtitle").classList.remove("d-none");
    subtitleOk = false;
  }
  checkIfCanEnableBtn();
};

const checkTitleString = () => {
  let errorArr = validateString(editPropertiesPopupTitle .value);
  if (errorArr.length === 0 || editPropertiesPopupTitle  === "") {
    editPropertiesPopupTitle .classList.remove("is-invalid");
    document.getElementById("alert-title").classList.add("d-none");
    titleOk = true;
  } else {
    //the text is not ok
    editPropertiesPopupTitle .classList.add("is-invalid");
    document.getElementById("alert-title").classList.remove("d-none");
    titleOk = false;
  }
  checkIfCanEnableBtn();
};



const showPopup = () => {
  editPropertiesPopup.classList.remove("d-none");
};

const hidePopup = () => {
  editPropertiesPopup.classList.add("d-none");
};

window.addEventListener("load", () => {
  editPropertiesPopup.addEventListener("click", (ev) => {
    if (
      ev.target.id !== "editPropertiesPopup" &&
      ev.target.id !== "editPropertiesPopupCancelBtn" &&
      ev.target.id !== "editPropertiesPopupCancelBtnIcon"
    ) {
      return;
    }
    hidePopup();
  });

  
  document
    .getElementById("editPropertiesPopupSaveBtn")
    .addEventListener("click", () => {
      selectedProperty.title = editPropertiesPopupTitle.value;
      selectedProperty.subtitle = editPropertiesPopupSubtitle.value;
      selectedProperty.description = editPropertiesPopupDescription.value;
      selectedProperty.price = editPropertiesPopupPrice.value;
      selectedProperty.Credit = editPropertiesPopupCredit.value;
      selectedProperty.createdAt= editPropertiesPopupCreatedAt.value;
     selectedProperty.imgUrl=editPropertiesPopupImg.value;
     editProperty(selectedProperty);
      hidePopup();
    });
  editPropertiesPopupImg.addEventListener("input", () => {
    editPropertiesPopupImgDisplay.src = editPropertiesPopupImg.value;
  });
});

export { initPopup, showPopup, hidePopup };
