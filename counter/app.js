// ---------------------------- counter ------------------------

const counterDisplay = document.getElementById("counter-display");
const decrementBtn = document.getElementById("decrement-btn");
const incrementBtn = document.getElementById("increment-btn");

let count = 0
incrementBtn.addEventListener("click", () => {
    count++;
    counterDisplay.innerText = count;
})
decrementBtn.addEventListener("click", () => {
    count--;
    counterDisplay.innerText = count;
})