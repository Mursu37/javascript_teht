const operation = document.getElementById("operation");
const start = document.getElementById("start");
const result = document.getElementById("result");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

function calculate() {
    const n1 = parseFloat(num1.value);
    const n2 = parseFloat(num2.value);
    if (operation.value === "add") {
        result.innerText = (n1 + n2).toString();
    } else if (operation.value === "sub") {
        result.innerText = (n1 - n2).toString();
    } else if (operation.value === "multi") {
        result.innerText = (n1 * n2).toString();
    } else {
        result.innerText = (n1 / n2).toString();
    }
}

start.addEventListener("click", calculate);