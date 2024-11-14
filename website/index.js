// Recommended: All functions declared here
function createCityBoxes() {
    for (let city of cities) {
        let cityBox = document.createElement("div");
        cityBox.className += "cityBox";
        cityBox.textContent = `${city.name}`;
        citiesDiv.appendChild(cityBox);
    }
}

function markCityBox(cityObject, typeOfCity) {
    if (typeOfCity === "target") {
        cityBoxes[cityObject.id].className += ` target`;
    } else if (typeOfCity === "closest") {
        cityBoxes[cityObject.id].className += ` closest`;
    } else if (typeOfCity === "furthest") {
        cityBoxes[cityObject.id].className += ` furthest`;
    }
}
// Recommended: constants with references to existing HTML-elements
const h2 = document.querySelector("h2");
const citiesDiv = document.querySelector("#cities");
// Recommended: Ask for the city name and then the rest of the code
//const userInput = prompt("City please!");
//h2.textContent = userInput;
createCityBoxes();
const cityBoxes = document.querySelectorAll(".cityBox");

