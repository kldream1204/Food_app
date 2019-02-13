import axios from "axios";


const locationSeoul = document.querySelector(".location-seoul");


const getLocation =  async location => {
    await axios({
        url: `/api/${location}/location`,
        method: "get"
    }).then(res => console.log(res));
    
 
}

const handlelocation = event => {
    const location = event.target.innerText
    fetch("http://localhost:5000/api/서울/location")
    console.log(location);
    getLocation(location);
}

function init() {
    locationSeoul.addEventListener("click", handlelocation)
}

if(locationSeoul) {
    init()
}
