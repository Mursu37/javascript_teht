const numbers = [];
let number = undefined;
while (number !== 0) {
    number = parseInt(prompt("Input number"));
    numbers.push(number);
}

numbers.sort((a,b) => b-a);
console.log(numbers);

for (let i = 0; i <= numbers.length; i++) {
    console.log(numbers[i]);
}