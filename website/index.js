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

function getCityByName(cityName) {
    let cityFound = "";
    for (let city of cities) {
        if (city.name === cityName) {
            cityFound = city;
            break;
        } else {
            cityFound = null;
        }
    }
    return cityFound;
}

function createDistanceTable() {
    for (i=-1; i<cities.length; i++) {
        let cityCell = document.createElement("div");
        
        if (i === -1) {
            cityCell.textContent = "";
            cityCell.className += `cell`;
            table.appendChild(cityCell);
        } else {
            if (cities[i].id % 2 === 0) {
                cityCell.className += `even_row`;
            }
            cityCell.textContent = `${cities[i].id}-${cities[i].name}`;
            cityCell.className += ` cell`;
            cityCell.className += ` head_row`;
            table.appendChild(cityCell);
        }

        for (j=0; j<cities.length; j++) {
            let distanceCells = document.createElement("div");
            distanceCells.className += `cell`;
            if (i === -1) {
                distanceCells.className += ` head_column`;
                distanceCells.textContent = `${j}`;
                table.appendChild(distanceCells);
            } else {
                if (i === j) {
                    distanceCells.textContent = "";
                    if (j % 2 === 0) {
                        distanceCells.className += ` even_col`
                    }
                    table.appendChild(distanceCells);
                } else {
                    for (k=0; k<distances.length; k++) {
                        if ((i === distances[k].city1 && j === distances[k].city2) || (i === distances[k].city2 && j === distances[k].city1)) {
                            distanceCells.textContent = `${distances[k].distance / 10}`;
                            if (j % 2 === 0) {
                                distanceCells.className += ` even_col`
                            }
                            table.appendChild(distanceCells);
                        }
                    }
                }
            }
        
        
        }
    }
}
// Recommended: constants with references to existing HTML-elements
const h2 = document.querySelector("h2");
const citiesDiv = document.querySelector("#cities");
const table = document.querySelector("#table");
// Recommended: Ask for the city name and then the rest of the code
const userInput = "Zurich";
//h2.textContent = userInput;
createCityBoxes();
const cityBoxes = document.querySelectorAll(".cityBox");

var targetCityObject = getCityByName(userInput);
console.log(targetCityObject);

if (targetCityObject != null) {
    h2.textContent = `${targetCityObject.name} (${targetCityObject.country})`;
    document.querySelector("title").innerHTML = `${targetCityObject.name}`;

    markCityBox(targetCityObject, "target");
}