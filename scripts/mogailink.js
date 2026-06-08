const guessInput = document.getElementById("guess"); 
const viewport = document.getElementById("viewport");

function guess() {
    let guess = guessInput.value;
    let element = document.createElement("div");
    element.innerHTML = guess;
    element.classList.add("item", "draggable");
    // Get container dimensions
    const containerWidth = viewport.clientWidth;
    const containerHeight = viewport.clientHeight;

    // Calculate random position ensuring element stays inside
    const randomLeft = Math.floor(Math.random() * (containerWidth - 30)); // 30px for element size
    const randomTop = Math.floor(Math.random() * (containerHeight - 30));

    element.style.left = `${randomLeft}px`;
    element.style.top = `${randomTop}px`;

    viewport.append(element);
    guessInput.value = "";
    console.log(guess); 
}