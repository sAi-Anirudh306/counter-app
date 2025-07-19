let count = 0;

function updateDisplay() {
    display.value = count;  // use .value because it's an input
}
document.getElementById("increment").onclick = () => {
    count++;
    updateDisplay();
  };
document.getElementById("decrement").onclick = () => {
    count--;
    updateDisplay();
  };
document.getElementById("reset").onclick = () => {
    count = 0;
    updateDisplay();
  };  

  updateDisplay();