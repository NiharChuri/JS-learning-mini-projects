function rollDice() {
    const numOfDice = Number(document.getElementById("numOfDice").value);
    const diceResult = (document.getElementById("diceResult"));
    const diceImages = (document.getElementById("diceImages"));
    const values = [];
    const images = []

    for(let i=0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_faces/${value}.png">`);
    }

    diceResult.textContent = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("")
}

document.body.addEventListener("keydown", (ev) => {
    if (ev.key == "Enter"){
        rollDice();
    }
});