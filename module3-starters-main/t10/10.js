
const first = document.querySelector("input[name='firstname']");
const last = document.querySelector("input[name='lastname']");
const form = document.querySelector("form");
const p = document.querySelector("p");
console.log(first);
console.log(last);
console.log(form);

function press(evt) {
    evt.preventDefault();
    const name = `${first.value} ${last.value}`;
    p.innerText = `Your name is ${name}`;
}
form.addEventListener("submit", press);