const participantCount = prompt("How many participants");
const participantNames = [];
for (let i = 0; i < participantCount; i++) {
    let name = prompt(`${i+1}. participant name`);
    participantNames.push(name);
}
participantNames.sort();

console.log(participantNames)

for (let i = 0; i < participantNames.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = participantNames[i];
    document.querySelector("#participants").appendChild(li)
}