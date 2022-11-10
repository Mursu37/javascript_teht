const diceCount = parseInt(prompt("How many dice"));
const userInputSum = parseInt(prompt("Sum"));
let count = 0;

for (let i = 0; i < 10000; i++) {
    let sum = 0;
    for (let i = 0; i < diceCount; i++) {
        sum += Math.floor(Math.random()*6)+1;
    }
    if (sum === userInputSum) {
        count++;
    }
}
let probability = count / 100;
probability = probability.toFixed()
document.querySelector("#output").innerHTML = probability.toString() + "%";