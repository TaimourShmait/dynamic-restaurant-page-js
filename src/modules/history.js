function createHistoryPage () {

    const contentDiv = document.createElement("div");
    contentDiv.style.cssText = "width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #d70000";

    const videoBox = document.createElement("div");
    videoBox.style.cssText = "margin: 0 auto; background-color: white; width: 65rem; height: 39rem; margin-top: 4rem; margin-bottom: 4rem; display: flex; justify-content: center; align-items: center; overflow: hidden; padding: 1rem; border-radius: 0.5rem; box-shadow: 0 0 1rem rgba(37, 37, 37, 0.5);";

    const loadingText = document.createElement("p");
    loadingText.innerText = "Loading video...";
    loadingText.style.cssText = "position: absolute; color: black; font-size: 1.5rem; font-weight: bold;";
    videoBox.appendChild(loadingText);


    const video = document.createElement("iframe");
    video.setAttribute("width", "840");
    video.setAttribute("height", "560");
    video.setAttribute("src", "https://www.youtube.com/embed/c1u8jEPG71U"); 
    video.setAttribute("frameborder", "0");
    video.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
    video.setAttribute("allowfullscreen", "");
    video.style.cssText = "width: 100%; height: 100%; opacity: 0; transition: opacity 0.5s ease-in-out;";

    video.onload = () => {
        video.style.opacity = "1";
        loadingText.remove();
    };
    
    videoBox.appendChild(video);
    contentDiv.appendChild(videoBox);

    return contentDiv;

}


export function goHistory () {
    const contentDiv = createHistoryPage();
    const main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(contentDiv);
} 