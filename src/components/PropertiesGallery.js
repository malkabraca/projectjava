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

const createCard = (name, Credit, price, img) => {
  return `
  <div class="col">
    <div class="card">
      <img
        src="${img}"
        class="card-img-top"
        alt="${name}"
        "style="margin: 1.5rem; width: 8rem; height: 8rem;"
      />
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">Credit: 
          ${Credit}
        </p>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">price: ${price}</li>
      </ul>
      <i class="bi bi-cart3"></i>
      </div>
    </div>
  </div>
  `;
};

const createGallery = () => {
  let innerStr = "";
  for (let property of propertiesArr) {
    innerStr += createCard(
      property.name,
      property.Credit,
      property.price,
      property.imgUrl
    );
  }
  galleryDiv.innerHTML = innerStr;
};

export { initialPropertiesGallery, updatePropertiesGallery };
