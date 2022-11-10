const userInput = parseInt(prompt("Give number"));
function is_prime(number) {
    let answer = false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return answer;
        }
    }
    answer = true;
    return answer;
}
let output = is_prime(userInput)
document.querySelector("#output").innerHTML = `Is ${userInput} prime: ${output}`