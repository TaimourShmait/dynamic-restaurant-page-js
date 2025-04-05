import {goContact} from "../index.js";
import {createLowerHalf} from "./home.js";
import {createMenu} from "./menu.js";
import {createHistoryPage} from "./history.js";
import {createForm} from "./jobListings.js";
 
function generateResponsivePage () {
    const responsiveContainer = document.createElement("div");
    responsiveContainer.id = "responsive-container";

    const topContent = createLowerHalf();

    responsiveContainer.appendChild(topContent);

    const menuSection = document.createElement("div");
    menuSection.id = "menu-section-responsive";

    const menuText = document.createElement("p");
    menuText.textContent = "Menu";

    const menuContent = createMenu();
    menuContent.id = "menu-content-responsive";

    menuSection.appendChild(menuText);
    menuSection.appendChild(menuContent);

    responsiveContainer.appendChild(menuSection);

    const footerTextInput = document.querySelector("#footer-text-input");
    footerTextInput.setAttribute("placeholder", "Please don't hesitate to leave any questions or remarks!");


    return responsiveContainer;
}   

export function makeResponsive () {
    const main = document.querySelector("main");
    main.innerHTML = "";
    const contentDiv = generateResponsivePage();
    main.appendChild(contentDiv);
}