import gusImageSrc from "../assets/gustavo-fring.png"; 
import lunchImageSrc from "../assets/home/lunch.png";
import lunch2ImageSrc from "../assets/home/lunch2.png";
import chickenCostumeImageSrc from "../assets/home/chicken-suit.png";
import foodImageSrc from "../assets/home/food.png";

export function createStandardPage () {

    const contentDiv = document.createElement("div");
    contentDiv.id = "content";

    const sideImage = document.createElement("img");
    sideImage.src = gusImageSrc;
    sideImage.alt = "Owner of Los Pollos Hermanos Image";
    sideImage.id = "gustavo-fring-image";

    const quoteBox = document.createElement("div");
    quoteBox.id = "quote-box";

    const quote = document.createElement("p");
    quote.id = "quote";
    quote.textContent = "At Los Pollos Hermanos, we believe in family, tradition, and the perfect blend of spices. One bite, and you’ll know why our chicken is the best in the Southwest!";

    const attribution = document.createElement("p");
    attribution.id = "attribution";
    attribution.textContent = "Gus Fring - Owner";

    contentDiv.appendChild(sideImage);
    contentDiv.appendChild(quoteBox);
    quoteBox.appendChild(quote);
    quoteBox.appendChild(attribution);

    return contentDiv;
}

function createImagesContainer () {
    
    const imagesContainer = document.createElement("div");
    imagesContainer.style.cssText = "margin-top: 1rem; width: 100%; height: 50%; background-color: #d70000; display: flex; justify-content: center; gap: 0.5rem; border-bottom: 0.5rem solid #d70000;";

    const image1 = document.createElement("img");
    image1.src = foodImageSrc;

    const image2 = document.createElement("img");
    image2.src = lunch2ImageSrc;

    const image3 = document.createElement("img");
    image3.src = chickenCostumeImageSrc;
    
    const image4 = document.createElement("img");
    image4.src = lunchImageSrc;

    imagesContainer.appendChild(image1);
    imagesContainer.appendChild(image2);
    imagesContainer.appendChild(image3);
    imagesContainer.appendChild(image4);

    const imageClass = "homeImages";
    image1.classList.add(imageClass);
    image2.classList.add(imageClass);
    image3.classList.add(imageClass);
    image4.classList.add(imageClass);

 
    // imagesContainer.appendChild(image5);
    // imagesContainer.appendChild(image6);

    return imagesContainer;
}

export function goHome () {
    const main = document.querySelector("main");
    main.innerHTML = "";
    
    const imagesContainer = createImagesContainer();
    const contentDiv = createStandardPage();
    main.appendChild(imagesContainer);
    main.appendChild(contentDiv);
}



