const numbers = []
for (let i = 0; i < 5; i++) {
    let userInput = prompt("Give a number");
    numbers.push(userInput);
}

console.log(numbers)
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[numbers.length-1-i])
}