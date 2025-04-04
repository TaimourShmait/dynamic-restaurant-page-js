import notAvailableImageSrc from "../assets/not-available-image.png";

function createMenu () {

    const contentDiv = document.createElement("div");

    contentDiv.style.cssText = "width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: white;";

    const mainMenuHeader = document.createElement("p");
    mainMenuHeader.id = "main-menu-header";
    mainMenuHeader.textContent = "Main Menu Text!";
    mainMenuHeader.style.cssText = "font-size: 4rem; font-weight: bold; color: #164a97; margin-top: 1rem; text-align: left;";
    // contentDiv.appendChild(mainMenuHeader);

    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    menuContainer.style.cssText = " width: 90%; height: 35rem; display: flex; justify-content: center; align-items: center; gap: 1rem; margin: 2rem auto;";
    contentDiv.appendChild(menuContainer);

    const notAvailableImage = document.createElement("img");
    notAvailableImage.src = notAvailableImageSrc;
    notAvailableImage.classList.add("menu-item-image");
    menuContainer.appendChild(notAvailableImage);

    return contentDiv;
}

export function goMenu () {
    const main = document.querySelector("main");
    const contentDiv = createMenu();

    main.innerHTML = "";
    main.appendChild(contentDiv);
}