function concat(array) {
    let combined = "";
    for (let string of array) {
        combined += string;
    }
    return combined;
}

let test = ["Azir", "Ryze", "AurelionSol"];
document.querySelector("#output").innerHTML = concat(test);