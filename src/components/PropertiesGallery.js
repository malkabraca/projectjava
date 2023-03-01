let propertiesArr;
let galleryDiv;
//this function will transfer data from homepage to this page
const initialPropertiesGallery = (propertiesArrFromHomePage) => {
  galleryDiv = document.getElementById("home-page-properties-gallery");
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

const createCard = (title, credit, price, imgUrl) => {
  return `
  <div class="col">
    <div class="card">
      <img
        src="${imgUrl}"
        class="card-img-top"
        alt="${title}"
        "style="margin: 1.5rem; width: 8rem; height: 8rem;"
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

const createGallery = () => {
  let innerStr = "";
  for (let property of propertiesArr) {
    innerStr += createCard(
      property.title,
      property.credit,
      property.price,
      property.imgUrl
    );
  }
  galleryDiv.innerHTML = innerStr;
};

export { initialPropertiesGallery, updatePropertiesGallery };
