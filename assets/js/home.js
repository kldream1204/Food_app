const locationButtonShow = document.querySelector(".location-button-show");
const locationButtonHidden = document.querySelector(".location-button-hidden");
const locationList = document.querySelector(".location-list__container-list ");

function showLocation() {
    locationButtonShow.classList.add("button-display");
    locationButtonHidden.classList.remove("button-display");
    locationList.classList.add("list-move");
};

function hiddenLocation() {
    locationButtonShow.classList.remove("button-display");
    locationButtonHidden.classList.add("button-display");
    locationList.classList.remove("list-move");
};

function handleButton() {
    if(locationButtonShow) {
    locationButtonShow.addEventListener("click", showLocation);
    }
    if(locationButtonHidden) {
    locationButtonHidden.addEventListener("click", hiddenLocation);
    }
};

function init() {
    handleButton();
};  

init();