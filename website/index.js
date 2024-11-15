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

function getClosestCity(targetCityObject) {
    let cityDistance = 0;
    let cityId = 0;
    for (i=0; i<distances.length; i++) {
        if (targetCityObject.id === distances[i].city1) {
            let currentCityId = distances[i].city2;
            let currentDistance = distances[i].distance;
            
            if (cityDistance === 0) {
                cityDistance = currentDistance;
                cityId = currentCityId;
            } else if (currentDistance < cityDistance) {
                cityDistance = currentDistance;
                cityId = currentCityId;
            }
        } else if (targetCityObject.id === distances[i].city2) {
            let currentCityId = distances[i].city1;
            let currentDistance = distances[i].distance;
            
            if (cityDistance === 0) {
                cityDistance = currentDistance;
                cityId = currentCityId;
            } else if (currentDistance < cityDistance) {
                cityDistance = currentDistance;
                cityId = currentCityId;
            }
        }
    }
    let returnObject = cities[cityId];
    returnObject.distance = cityDistance;
    return returnObject;
}

function getFurthestCity(targetCityObject) {
    let cityDistance = 0;
    let cityId = 0;
    for (i=0; i<distances.length; i++) {
        if (targetCityObject.id === distances[i].city1) {
            let currentCityId = distances[i].city2;
            let currentDistance = distances[i].distance;
            
            if (cityDistance === 0) {
                cityDistance = currentDistance;
                cityId = currentCityId;
            } else if (currentDistance > cityDistance) {
                cityDistance = currentDistance;
                cityId = currentCityId;
            }
        } else if (targetCityObject.id === distances[i].city2) {
            let currentCityId = distances[i].city1;
            let currentDistance = distances[i].distance;
            
            if (cityDistance === 0) {
                cityDistance = currentDistance;
                cityId = currentCityId;
            } else if (currentDistance > cityDistance) {
                cityDistance = currentDistance;
                cityId = currentCityId;
            }
        }
    }
    let returnObject = cities[cityId];
    returnObject.distance = cityDistance;
    return returnObject;
}

function updateBoxDistance(farCity, closeCity) {
    let closest = document.querySelector(".closest");
    let furthest = document.querySelector(".furthest");
    let farID = document.querySelector("#furthest");
    let closeID = document.querySelector("#closest");

    closest.textContent += ` ligger ${closeCity.distance / 10} mil bort`;
    furthest.textContent += ` ligger ${farCity.distance / 10} mil bort`;
    farID.textContent = `${farCity.name}`;
    closeID.textContent = `${closeCity.name}`;
}


// Recommended: constants with references to existing HTML-elements
const h2 = document.querySelector("h2");
const citiesDiv = document.querySelector("#cities");
// Recommended: Ask for the city name and then the rest of the code
//const userInput = prompt("City please!");
//h2.textContent = userInput;
createCityBoxes();
const cityBoxes = document.querySelectorAll(".cityBox");

