const container = document.getElementById("container");

for (let i = 1; i <= 16; i++) {
    const div = document.createElement('div');
    div.id = `div${i}`;
    div.classList.add("gridElement");
    container.appendChild(div);
}

// Set up a “hover” effect so that the grid divs change color 
// when your mouse passes over them, leaving a (pixelated) trail 
// through your grid like a pen would.

// Create 2 listener functions using event delegation

// Create 1 listener function for mouseover event
 container.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.className == "gridElement")
        target.setAttribute("class", "overGridElement")
 });

// Create 1 listetner function for mouseout event
container.addEventListener("mouseout", (event) => {
    let target = event.target;
    if (target.className == "overGridElement")
        target.setAttribute("class", "gridElement")
 });



