const diceCount = prompt("How many dice?")
let sum = 0;
for (let i = 0; i < diceCount; i++) {
    let dice = Math.floor(Math.random()*6)+1;
    sum += dice
    console.log(dice)
}

document.querySelector("#output").innerHTML = `number of dice: ${diceCount}<br>sum: ${sum}`;