
let count = 0;
let countEl = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEL.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
    console.log(count);
}



