function rollDice() {
    return Math.floor(Math.random()*6)+1;
}

const diceRolls = [];
while (diceRolls[diceRolls.length-1] !== 6) {
    let roll = rollDice();
    diceRolls.push(roll);
    let li = document.createElement("li");
    li.innerText = roll;
    document.querySelector("#output").appendChild(li);
}