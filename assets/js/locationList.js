import axios from "axios";

const locationSeoul = document.querySelector(".location-seoul");

const sendLocation =  async location => {
    await axios({
        url: `/api/${location}/location`,
        method: "post"
    })
}

const handlelocation = event => {
    const location = event.target.innerText
    console.log(location);
    sendLocation(location);
}

function init() {
    locationSeoul.addEventListener("click", handlelocation)
}

if(locationSeoul) {
    init()
}
