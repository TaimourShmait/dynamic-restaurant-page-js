export function createHistoryPage () {

    const contentDiv = document.createElement("div");
    contentDiv.id = "content-history";

    const videoBox = document.createElement("div");
    videoBox.id = "video-box-history";

    const loadingText = document.createElement("p");
    loadingText.innerText = "Loading video...";
    loadingText.id = "loading-text-history";

    videoBox.appendChild(loadingText);

    const video = document.createElement("iframe");
    video.id = "video-history";
    video.setAttribute("width", "840");
    video.setAttribute("height", "560");
    video.setAttribute("src", "https://www.youtube.com/embed/c1u8jEPG71U"); 
    video.setAttribute("frameborder", "0");
    video.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
    video.setAttribute("allowfullscreen", "");

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