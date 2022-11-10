const n1 = parseInt(prompt("First number"));
const n2 = parseInt(prompt("Second number"));
const n3 = parseInt(prompt("Third number"));

let sum = n1 + n2 + n3;
let product = n1 * n2 * n3;
let average = (n1 + n2 + n3) / 3;

document.querySelector("#output").innerHTML = "Sum: " + sum + "<br>" + "Product: " + product + "<br>" + "Average: " + average;
