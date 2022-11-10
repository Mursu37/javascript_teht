const name = prompt('Whats your name');
const randomVal = Math.floor(Math.random() * 4) + 1;
let room;
console.log(randomVal);

switch (randomVal) {
    case 1:
        room = 'Daredevil';
        break;
    case 2:
        room = 'Slytherin';
        break;
    case 3:
        room = 'Hufflepuff';
        break;
    case 4:
        room = 'Ravenclaw';
        break;
}
console.log(room);
document.querySelector('#output').innerHTML = name + ', You are ' + room;