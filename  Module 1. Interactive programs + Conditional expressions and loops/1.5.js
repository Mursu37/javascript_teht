"use strict";
const year = parseInt(prompt("Enter year"));
let isLeap = false;
let message;
if (year % 100 === 0) {
    if (year % 400 === 0) {
        isLeap = true;
    }
} else if (year % 4 === 0) {
    isLeap = true;
}

if (isLeap) {
    message = "is";
} else {
    message = "isn't";
}
document.querySelector("#output").innerHTML = `${year} ${message} a leap year`;