function changeMode(size, weight, transform, background, color) {
    return () => {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
};

function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let addParagraph = document.createElement("p");
    addParagraph.innerHTML = "Welcome Holberton!";
    document.body.appendChild(addParagraph);

    let addButton1 = document.createElement("button");
    addButton1.setAttribute("id", "addButton1");
    addButton1.innerHTML = "Spooky";
    document.body.appendChild(addButton1);

    let addButton2 = document.createElement("button");
    addButton2.setAttribute("id", "addButton2");
    addButton2.innerHTML = "Dark mode";
    document.body.appendChild(addButton2);

    let addButton3 = document.createElement("button");
    addButton3.setAttribute("id", "addButton3");
    addButton3.innerHTML = "Scream mode";
    document.body.appendChild(addButton3);

    document.getElementById("addButton1").onclick = spooky;
    document.getElementById("addButton2").onclick = darkMode;
    document.getElementById("addButton3").onclick = screamMode;
}

main();
