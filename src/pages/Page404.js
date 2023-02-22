import handlePageChange from "../routes/router.js";
import PAGES from "../models/pageModel.js";

const clickHereHome = document.getElementById("click-here-home-page");

clickHereHome.addEventListener("click", () => {
    handlePageChange(PAGES.HOME);
  });

