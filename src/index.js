// Import styles and modules for dynamic rendering in the main element in template.html

import "./styles.css";

import {goHome} from "./modules/home.js";
import {goMenu} from "./modules/menu.js";
import {goHistory} from "./modules/history.js";
import {goJobListings} from "./modules/jobListings.js";
import {makeResponsive} from "./modules/responsiveHome.js";
 
// Function to scroll down to the static form element in template.html

export function goContact () {
    document.querySelector("#main-footer-form").scrollIntoView({behavior: "smooth"});
};

// Wait until the DOM is fully loaded an execute

document.addEventListener("DOMContentLoaded", () => {
    
    const main = document.querySelector("main");
    goHome(); // Called at start to dynamically generate the home page
    
    // Define static buttons found in template.html

    const homeButtons = document.querySelectorAll(".home-button");
    const menuButtons = document.querySelectorAll(".menu-button");
    const historyButtons = document.querySelectorAll(".history-button");
    const jobListingsButtons = document.querySelectorAll(".job-listings-button");
    const contactButton = document.querySelector("#contact-button");

    // Set event listeners for each one of the buttons and generate content accordingly
    
    homeButtons.forEach(homeButton => {homeButton.addEventListener("click", goHome);});
    menuButtons.forEach(menuButton => {menuButton.addEventListener("click", goMenu);});
    historyButtons.forEach(historyButton => {historyButton.addEventListener("click", goHistory);});
    jobListingsButtons.forEach(jobListingButton => {jobListingButton.addEventListener("click", goJobListings);});
    contactButton.addEventListener("click", goContact);

    // Check for width to generate a responsive page 

    if (window.innerWidth >= 320 && window.innerWidth <= 1024) {
        makeResponsive();
    }

});

