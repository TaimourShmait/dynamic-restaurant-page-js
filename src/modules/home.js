import gusImageSrc from "../assets/home/gustavo-fring.png"; 
import lunchImageSrc from "../assets/home/lunch.png";
import lunch2ImageSrc from "../assets/home/lunch2.png";
import chickenCostumeImageSrc from "../assets/home/chicken-suit.png";
import foodImageSrc from "../assets/home/food.png";

function createUpperHalf () { // Function to create upper half of the content (images)
    
    const imagesContainer = document.createElement("div");
    imagesContainer.id = "content-upper-home"; 

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

    const imageClass = "images-home";
    image1.classList.add(imageClass);
    image2.classList.add(imageClass);
    image3.classList.add(imageClass);
    image4.classList.add(imageClass);

    return imagesContainer;
}

export function createLowerHalf () { // Function to create lower half of the content (Image of owner + quote/slogan)

    const contentDiv = document.createElement("div");
    contentDiv.id = "content-lower-home";

    const sideImage = document.createElement("img");
    sideImage.src = gusImageSrc;
    sideImage.alt = "Gustavo Fring - Owner of Los Pollos Hermanos Image";

    const quoteBox = document.createElement("div");
    quoteBox.id = "quote-box-home";

    const quote = document.createElement("p");
    quote.id = "quote-home";
    quote.textContent = "At Los Pollos Hermanos, we believe in family, tradition, and the perfect blend of spices. One bite, and you’ll know why our chicken is the best in the Southwest!";

    const attribution = document.createElement("p");
    attribution.id = "attribution-home";
    attribution.textContent = "Gus Fring — Owner";

    quoteBox.appendChild(quote);
    quoteBox.appendChild(attribution);
    contentDiv.appendChild(sideImage);
    contentDiv.appendChild(quoteBox);

    return contentDiv;
}

export function goHome () {
    const main = document.querySelector("main");
    main.innerHTML = "";
    const contentDivUpper = createUpperHalf();
    const contentDivLower = createLowerHalf();
    main.appendChild(contentDivUpper);
    main.appendChild(contentDivLower);
}



