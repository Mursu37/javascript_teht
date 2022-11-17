const first = document.createElement("li");
const second = document.createElement("li");
const third = document.createElement("li");
first.innerHTML = "First item";
second.innerHTML = "Second item";
third.innerHTML = "Third item";

const target = document.getElementById("target");
target.appendChild(first);
target.appendChild(second);
target.appendChild(third);