const input = document.getElementById("calculation");
const result = document.getElementById("result");
function check_type() {
    const query = input.value;
    let split;
    if (query.includes("+") === true) {
        split = query.split("+").map(Number);
        addition(split);
    } else if (query.includes("-") === true) {
        split = query.split("-");
        extraction(split);
    } else if (query.includes("*") === true) {
        split = query.split("*");
        multiplication(split);
    } else if (query.includes("/") === true) {
        split = query.split("/");
        subtraction(split);

    }
}

function addition(numbers) {
    let total = 0 + numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        total += numbers[i];
    }
    result.innerText = total.toString();
}

function extraction(numbers) {
    let total = 0 + numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        total -= numbers[i];
    }
    result.innerText = total.toString();
}

function multiplication(numbers) {
    let total = 0 + numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        total *= numbers[i];
    }
    result.innerText = total.toString();
}

function subtraction(numbers) {
    let total = 0 + numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        total /= numbers[i];
    }
    result.innerText = total.toString();
}
start.addEventListener("click", check_type);