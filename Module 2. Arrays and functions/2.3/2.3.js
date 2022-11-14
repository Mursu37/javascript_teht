const dogList = [];
for (let i = 0; i < 6; i++) {
    let dogName = prompt(`${i+1}. Dog's name`);
    dogList.push(dogName);
}
dogList.sort();
dogList.reverse();

for (let i = 0; i < dogList.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = dogList[i]
    document.querySelector("#dogs").appendChild(li);
}