let propertiesArr;
let listDiv;
let isAdmin;
let deleteProperty;
let showPopup;
let showPopupTwo;
//this function will transfer data from homepage to this page
const initialPropertiesList = (
  propertiesArrFromHomePage,
  isAdminParam,
  deletePropertyFromHomePage,
  showPopupFromHomePage,
  showPopupTwoFromHomePage
) => {
  listDiv = document.getElementById("home-page-properties-list");
  isAdmin = isAdminParam;
  deleteProperty = deletePropertyFromHomePage;
  showPopup = showPopupFromHomePage;
  showPopupTwo = showPopupTwoFromHomePage;
  updatePropertiesList(propertiesArrFromHomePage);
};

const updatePropertiesList = (propertiesArrFromHomePage) => {
  /*
    this function will get data from homepage and create new list.
    if the list already exists it will remove the old one and
    create new one
  */
  propertiesArr = propertiesArrFromHomePage;
  createList();
};

const createItem = (title, imgUrl, credit, id) => {
  const adminBtns = `
  <div class="col-md-1">
  <button type="button" class="btn btn btn-light w-100" id="propertyListEditBtn-${id}">
    <i class="bi bi-pen-fill"></i>
  </button>
  </div>
  <div class="col-md-1">
  <button type="button" class="btn btn btn-light w-100" id="propertyListDeleteBtn-${id}">
  <i class="bi bi-trash3-fill"></i>
  </button>
  </div>
  `;
  return `
  <li class="list-group-item">
    <div class="row">
        <div class="col-md-2">
        <img src="${imgUrl}" class="img-fluid" id="propertyListImgBtn-${id}" alt="${title}"style="margin: 1.5rem; width: 8rem;
        height: 8rem;"/>
        </div>
        <div class="col-md-6">
        <div>${imgUrl}</div>
        </div>
        <div class="col-md-1">
        <h5 class="card-title">${title}</h5>
        </div>
        <div class="col-md-1">
        <h5 class="card-title">${credit}</h5>
        </div>
        ${isAdmin ? adminBtns : ""}
    </div>
    </li>
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

const handleDeleteBtnClick = (ev) => {
  deleteProperty(getIdFromClick(ev));
};

const handleEditBtnClick = (ev) => {
  showPopup(getIdFromClick(ev));
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

const createList = () => {
  let innerStr = "";
  //clear event listeners for delete btns
  clearEventListeners("propertyListDeleteBtn", handleDeleteBtnClick);
  //clear event listeners for edit btns
  clearEventListeners("propertyListEditBtn", handleEditBtnClick);

  clearEventListeners("propertyListImgBtn", handleImgBtnClick);

  //create new elements and remove old ones
  for (let property of propertiesArr) {
    innerStr += createItem(
      property.title,
      property.imgUrl,
      property.credit,
      property.id
    );
  }
  listDiv.innerHTML = innerStr;
  // add event listeners for delete btns
  createBtnEventListener("propertyListDeleteBtn", handleDeleteBtnClick);
  // add event listeners for edit btns
  createBtnEventListener("propertyListEditBtn", handleEditBtnClick);

  createBtnEventListener("propertyListImgBtn", handleImgBtnClick);
};

//Creates event listener for the delete buttons
const createBtnEventListener = (idKeyword, handleFunction) => {
  let btns = document.querySelectorAll(`[id^='${idKeyword}-']`);
  //add events to new btns
  for (let btn of btns) {
    btn.addEventListener("click", handleFunction);
  }
};

export { initialPropertiesList, updatePropertiesList };
