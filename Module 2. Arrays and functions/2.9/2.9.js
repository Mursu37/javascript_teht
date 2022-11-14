function even(array) {
    const evenNumbers = [];
    for (let number of array) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}

const testArray = [1, 2, 3, 5, 7, 8, 6, 12, 99];
const evenArray = even(testArray);

console.log(testArray);
console.log(evenArray);