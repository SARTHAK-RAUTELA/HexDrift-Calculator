var display = document.getElementById("display");
var sound = document.getElementById("click");

function play() {
    //Resets audio to the start
    sound.currentTime = 0;
    sound.play();
}

function press(val) {
    play();
    if (display.innerText === "0") display.innerText = val;
    else display.innerText += val;
}

function clearDisplay() {
    play();
    display.innerText = "0";
}

function calculate() {
    play();
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error Baby";
    }
}