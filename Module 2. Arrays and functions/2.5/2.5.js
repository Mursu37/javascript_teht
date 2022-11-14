const numbers = [];
let noCopies = true;

while (noCopies) {
    let number = parseInt(prompt("Give me a new number"));
    for (let n of numbers) {
        if (number === n) {
            noCopies = false;
            alert(`${number} has already been given, stopping program.`)
            break;
        }
    }
    if (noCopies) {
        numbers.push(number);
    }
}
numbers.sort((a,b) => a-b);
for (let n of numbers) {
    console.log(n)
}