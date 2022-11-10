function check_if_leap (year) {
    let isLeap = false;
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            isLeap = true;
        }
    } else if (year % 4 === 0) {
        isLeap = true;
    }
    return isLeap;
}

const startYear = prompt("Start year");
const endYear = prompt("End year");


for (let i = startYear; i < endYear; i++) {
    if (check_if_leap(i)) {
        let li = document.createElement("li")
        li.innerText = i
        document.querySelector("#output").appendChild(li)
        console.log(i)
    }
}