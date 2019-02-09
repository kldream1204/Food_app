const sildeBox = document.querySelector(".home__slide"),
      preButton = document.querySelector(".pre-button"),
      nextButton = document.querySelector(".next-button"),
      circle_1 = document.querySelector(".circle-1"),
      circle_2 = document.querySelector(".circle-2"),
      circle_3 = document.querySelector(".circle-3"),
      circle_4 = document.querySelector(".circle-4"),
      circle_5 = document.querySelector(".circle-5");

let number = 0;

const slideShow = (value) => {
    sildeBox.style.transform = `translateX(-${value*(100)}%)`; 
    if( number === 4 ) {
        nextButton.classList.add("button-display");
        circle_5.classList.add("circle-color");
        circle_4.classList.remove("circle-color");
    }else if (number === 3) {
        nextButton.classList.remove("button-display");
        circle_4.classList.add("circle-color");
        circle_5.classList.remove("circle-color");
        circle_3.classList.remove("circle-color");
    }else if (number === 2) {    
        circle_3.classList.add("circle-color");
        circle_4.classList.remove("circle-color");
        circle_2.classList.remove("circle-color");
    }else if (number === 1) {
        preButton.classList.remove("button-display");
        circle_2.classList.add("circle-color");
        circle_3.classList.remove("circle-color");
        circle_1.classList.remove("circle-color");
    }else if (number === 0) {
        preButton.classList.add("button-display");
        circle_1.classList.add("circle-color");
        circle_2.classList.remove("circle-color");
    }
}

const preSlide = () => {
    number = number - 1;
    slideShow(number);
}

const nextSlide = () => {
    number = number + 1;
    slideShow(number);
}

const handleButton = () => {
    preButton.addEventListener("click", preSlide);
    nextButton.addEventListener("click", nextSlide);
}

function init() {
    handleButton();
}

init()