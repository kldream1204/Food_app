const slideBox = document.querySelector(".slide-show__box");
const preBtn = document.querySelector(".slide-button-pre");
const nextBtn = document.querySelector(".slide-button-next");
const dot1 = document.querySelector(".dot-1"),
      dot2 = document.querySelector(".dot-2"),
      dot3 = document.querySelector(".dot-3"),
      dot4 = document.querySelector(".dot-4"),
      dot5 = document.querySelector(".dot-5");

let number = 0;

function preSlide() {
    number --
    if(number === -1) {
        number = 4
    }
    slide(number);
}

function nextSlide() {
    number ++
    if(number === 5) {
        number = 0;
    }
    slide(number);
}

function slide(number) {
    slideBox.style.transform = `translateX(-${100*number}%)`;
    count();
}

function handleButton() {
    preBtn.addEventListener("click", preSlide);
    nextBtn.addEventListener("click", nextSlide)
}

function count() {
    if(number === 0) {
        dot1.classList.add("count-dot");
        dot2.classList.remove("count-dot");
        dot5.classList.remove("count-dot");
    }else if(number === 1) {
        dot1.classList.remove("count-dot");
        dot2.classList.add("count-dot");
        dot3.classList.remove("count-dot");
    }else if(number === 2) {
        dot2.classList.remove("count-dot");
        dot3.classList.add("count-dot");
        dot4.classList.remove("count-dot");
    }else if(number === 3) {
        dot3.classList.remove("count-dot");
        dot4.classList.add("count-dot");
        dot5.classList.remove("count-dot");
    }else if(number === 4) {
        dot4.classList.remove("count-dot");
        dot5.classList.add("count-dot");
        dot1.classList.remove("count-dot");
    }
}
function init() {
    handleButton()
}

if(slideBox) {
    init()
}