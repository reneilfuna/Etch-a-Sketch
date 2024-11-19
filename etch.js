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

//  Add a button on the top of the screen that will send the user a popup 
//  asking for the number of squares per side for the new grid. Once entered, 
//  the existing grid should be removed, and a new grid should be generated 
//  in the same total space as before (e.g., 960px wide) so that you’ve got 
//  a new sketch pad.

// Reference button
// Create event listener for clicking button

// Link to function that calls a prompt

// Enter prompt input into function
// Function resets the grid and creates a new one 
const counter = document.getElementById("counter");
counter.textContent = `# of Squares Per Side: `

