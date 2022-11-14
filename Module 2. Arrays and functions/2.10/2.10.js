const candidateCount = prompt("Amount of candidates");
const candidates = [];
for (let i = 0; i < candidateCount; i++) {
    let name = prompt(`Name for candidate ${i+1}`)
    candidates.push({name: name, votes: 0})
}
const voteCount = prompt("How many votes?")

for (let i = 0; i < voteCount; i++) {
    for (let voters of candidates) {
        let vote = prompt(`${voters.name}, Who do you vote?`);
        for (let j = 0; j < candidateCount; j++) {
            if (candidates[j].name === vote) {
                candidates[j].votes++;
            }
        }

    }
}
candidates.sort((a,b) => b.votes-a.votes);
console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
console.log("results");
for (let person of candidates) {
    console.log(`${person.name}: ${person.votes} votes`)
}
