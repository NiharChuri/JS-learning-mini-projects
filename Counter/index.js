const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
const counter = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    counter.textContent = count;
}
document.body.addEventListener("keydown", (ev) => {
    if (ev.key == "Enter"){
        count++;
        counter.textContent = count;
    }
});

decreaseBtn.onclick = function(){
    count--;
    counter.textContent = count;
}
document.body.addEventListener("keydown", (ev) => {
    if (ev.key == "Backspace"){
        count--;
        counter.textContent = count;
    }
});

resetBtn.onclick = function(){
    count = 0;
    counter.textContent = count;
}
document.body.addEventListener("keydown", (ev) => {
    if (ev.key == " "){
        count = 0;
        counter.textContent = count;
    }
});