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

function factorial() {
    play();
    let n = eval(display.innerText);
    let r = 1;
    for (let i = 1; i <= n; i++) r += 1;
    display.innerText = r;
}

// ====Keyboard Support=====

document.addEventListener("keydown", e => {
    const k = e.key;
    if (!isNaN(k)) press(k);
    if (["+", "-", "*", "/", ".", "(", ")"].includes(k)) press(k);
    if (k === "Enter") calculate();
    if (k === "Backspace") {
        display.innerText = display.innerText.length > 1 ? display.innerText.slice(0, -1) : "0";
    }
    if (k === "Escape") clearDisplay();
});

//====Background display formulas=====

var formulas = [
    "E = mc²",
    "F = ma",
    "V = IR", "HEXDRIFT",
    "P = IV",
    "PV = nRT",
    "KE = ½mv²", "HEXDRIFT",
    "PE = mgh",
    "ω = 2πf",
    "λ = c/f",
    "p = mv", "HEXDRIFT",
    "a = dv/dt",
    "s = ut + ½at²",
    "ΔxΔp ≥ ħ/2",
    "E = hf",
    "λ = h/p", "HEXDRIFT",
    "F = Gm₁m₂/r²",
    "q = It",
    "W = F·d",
    "∮ B·dl = μ₀I",
    "∇·E = ρ/ε₀", "HEXDRIFT",
    "∇×B = μ₀J",
    "R = ρL/A",
    "C = Q/V",
    "τ = r × F", "a² + b² = c²", "HEXDRIFT",
    "A = πr²",
    "C = 2πr", "HEXDRIFT",
    "sin²θ + cos²θ = 1",
    "tanθ = sinθ/cosθ",
    "e^{iπ} + 1 = 0", "HEXDRIFT",
    "log(ab) = log a + log b",
    "log(a/b) = log a − log b",
    "ln(e^x) = x",
    "∑ n",
    "∑ n²",
    "∑ n³",
    "lim x→∞",
    "lim x→0",
    "d/dx(x²) = 2x",
    "d/dx(sin x) = cos x", "HEXDRIFT",
    "d/dx(e^x) = e^x",
    "∫ x dx",
    "∫ e^x dx = e^x",
    "∫ sin x dx = −cos x",
    "∫ 1/x dx = ln|x|",
    "∂f/∂x",
    "∇²φ = 0"
    , "∮ f(z)dz = 0",
    "∫₀^∞ e^{−x} dx = 1", "HEXDRIFT",
    "∑_{n=0}^∞ xⁿ",
    "∀x ∈ ℝ", "HEXDRIFT",
    "∃! x",
    "ℝ ⊂ ℂ",
    "|z| = √(x² + y²)",
    "f(x) → ∞", "HEXDRIFT",
    "det(A) ≠ 0",
    "A⁻¹A = I",
    "rank(A) ≤ n",
    "||v|| = 1", "HEXDRIFT",
    "⟨u,v⟩ = 0"


];

var bg = document.getElementById("bg");
for (let i = 0; i < 45; i++) {
    let f = document.createElement("div");
    f.className = "formula";
    f.innerText = formulas[Math.floor(Math.random() * formulas.length)];
    f.style.left = Math.random() * 100 + "vw";
    f.style.animationDuration = 10 + Math.random() * 18 + "s";
    f.style.fontSize = 14 + Math.random() * 22 + "px";
    bg.appendChild(f);
}