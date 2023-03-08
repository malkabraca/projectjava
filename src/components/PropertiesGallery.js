let propertiesArr;
let galleryDiv;
let showPopupTwo;
//this function will transfer data from homepage to this page
const initialPropertiesGallery = (
  propertiesArrFromHomePage,
  showPopupTwoFromHomePage
) => {
  galleryDiv = document.getElementById("home-page-properties-gallery");
  showPopupTwo = showPopupTwoFromHomePage;
  updatePropertiesGallery(propertiesArrFromHomePage);
};

const updatePropertiesGallery = (propertiesArrFromHomePage) => {
  /*
    this function will get data from homepage and create new gallery.
    if the gallery already exists it will remove the old one and
    create new one
  */
  propertiesArr = propertiesArrFromHomePage;
  createGallery();
};

const createCard = (title, credit, price, imgUrl, id) => {
  return `
  <div class="col">
    <div class="card">
      <img
        src="${imgUrl}"
        class="card-img-top"
        alt="${title}"
        "style="margin: 1.5rem; width: 8rem; height: 8rem;"
        id="propertyGalleryImgBtn-${id}"
      />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">Credit: 
          ${credit}
        </p>
        <div class="d-flex justify-content-between">
        <div>price: ${price}$</div>
        <div> <i class="bi bi-cart3"></i></div>
        </div>
      
      </div>
    </div>
  </div>
  `;
};

const getIdFromClick = (ev) => {
  let idFromId = ev.target.id.split("-"); // split the id to array
  if (!ev.target.id) {
    /*
        if press on icon then there is no id
        then we need to take the id of the parent which is btn
      */
    idFromId = ev.target.parentElement.id.split("-");
  }
  return idFromId[1];
};
const handleImgBtnClick = (ev) => {
  showPopupTwo(getIdFromClick(ev));
};
const clearEventListeners = (idKeyword, handleFunction) => {
  //get all old btns
  let btnsBefore = document.querySelectorAll(`[id^='${idKeyword}-']`);
  //remove old events
  for (let btn of btnsBefore) {
    btn.removeEventListener("click", handleFunction);
  }
};

const createGallery = () => {
  let innerStr = "";
  clearEventListeners("propertyGalleryImgBtn", handleImgBtnClick);
  for (let property of propertiesArr) {
    innerStr += createCard(
      property.title,
      property.credit,
      property.price,
      property.imgUrl,
      property.id
    );
  }
  galleryDiv.innerHTML = innerStr;
  createBtnEventListener("propertyGalleryImgBtn", handleImgBtnClick);
};
const createBtnEventListener = (idKeyword, handleFunction) => {
  let btns = document.querySelectorAll(`[id^='${idKeyword}-']`);
  //add events to new btns
  for (let btn of btns) {
    btn.addEventListener("click", handleFunction);
  }
};

export { initialPropertiesGallery, updatePropertiesGallery };
