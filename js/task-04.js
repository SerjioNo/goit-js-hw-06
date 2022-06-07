

const incrBtn = document.querySelector("[data-action='increment']");
const decrBtn = document.querySelector("[data-action='decrement']");
const valueNum = document.querySelector("#value");

let valueCounter = 0;

incrBtn.addEventListener("click", () => {
    valueCounter += 1;
    valueNum.textContent = valueCounter;
});

decrBtn.addEventListener("click", ( ()=> {
    valueCounter -= 1;
    valueNum.textContent = valueCounter;
}));


