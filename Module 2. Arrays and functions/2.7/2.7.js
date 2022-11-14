function rollDice(arg) {
    return Math.floor(Math.random()*arg)+1;
}

const sideCount = parseInt(prompt("How many sides"));
const diceRolls = [];

while (diceRolls[diceRolls.length-1] !== sideCount) {
    let roll = rollDice(sideCount);
    diceRolls.push(roll);
    let li = document.createElement("li");
    li.innerText = roll;
    document.querySelector("#output").appendChild(li);
}