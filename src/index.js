import "./styles.css";

// Import / Define functions

import {goHome} from "./modules/home.js";
import {goMenu} from "./modules/menu.js";
import {goHistory} from "./modules/history.js";
import {goJobListings} from "./modules/jobListings.js";

export function goContact () {
    document.querySelector("#main-footer-form").scrollIntoView({behavior: "smooth"});
};

document.addEventListener("DOMContentLoaded", () => {
    
    const main = document.querySelector("main");
    console.log("Hello World! ~ WebPack Configuration Success!");
    
    goHome(); // Always call this at the start to dynamically generate the main home page
    
    const homeButtons = document.querySelectorAll(".home-button");
    const menuButtons = document.querySelectorAll(".menu-button");
    const historyButtons = document.querySelectorAll(".history-button");
    const jobListingsButtons = document.querySelectorAll(".job-listings-button");
    const contactButton = document.querySelector("#contact-button");

    console.log(homeButtons);
    
    homeButtons.forEach(homeButton => {homeButton.addEventListener("click", goHome);});
    menuButtons.forEach(menuButton => {menuButton.addEventListener("click", goMenu);});
    historyButtons.forEach(historyButton => {historyButton.addEventListener("click", goHistory);});
    jobListingsButtons.forEach(jobListingButton => {jobListingButton.addEventListener("click", goJobListings);});
    contactButton.addEventListener("click", goContact);
});

