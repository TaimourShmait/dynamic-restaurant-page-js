import notAvailableImageSrc from "../assets/not-available-image.png";

export function createMenu () {

    const contentDiv = document.createElement("div");
    contentDiv.id = "content-menu";

    const notAvailableImage = document.createElement("img");
    notAvailableImage.src = notAvailableImageSrc;
    notAvailableImage.id = "not-available-image";
    notAvailableImage.classList.add("menu-item-image");

    contentDiv.appendChild(notAvailableImage);

    return contentDiv;
}

export function goMenu () {
    const main = document.querySelector("main");
    const contentDiv = createMenu();
    main.innerHTML = "";
    main.appendChild(contentDiv);
}