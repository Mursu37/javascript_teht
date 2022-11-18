
const first = document.querySelector("input[name='firstname']")
const last = document.querySelector("input[name='lastname']")
const form = document.querySelector("form")
console.log(first);
console.log(last);
console.log(form);

function press(evt) {
    evt.preventDefault();
}
form.addEventListener("submit", press)