import "./assets/scss/style.scss"
import "./assets/scss/nav.scss"
import "./assets/scss/header.scss"
import "./assets/scss/description.scss"
import "./assets/scss/statistics.scss"
import "./assets/scss/branches.scss"
import "./assets/scss/map.scss"
import "./assets/scss/mission.scss"
import "./assets/scss/business.scss"
import "./assets/scss/packages.scss"
import "./assets/scss/slider.scss"

import renderNav from "./assets/js/nav.js"
import renderHeader from "./assets/js/header.js"
import renderDescription from "./assets/js/description.js"
import renderStatistics from "./assets/js/statistics.js"
import renderBranches from "./assets/js/branches.js"
import renderMap from "./assets/js/map.js"
import renderMission from "./assets/js/mission.js"
import renderBusiness from "./assets/js/business.js"
import renderPackages from "./assets/js/packages.js"
import renderSlider from "./assets/js/slider.js"

renderNav();
renderHeader();
renderDescription();
renderStatistics();
renderBranches();
renderMap();
renderMission();
renderBusiness();
renderPackages();

document.addEventListener("DOMContentLoaded", () => {
    let sliderWidth
        switch (true) {
            case window.innerWidth < 640:
                sliderWidth = 360;
                break;
            case window.innerWidth < 768:
                sliderWidth = 600;
                break;
            case window.innerWidth < 1024:
                sliderWidth = 750;
                break;
            default:
                sliderWidth = 960;
                break;
        }
        renderSlider(sliderWidth)
})

