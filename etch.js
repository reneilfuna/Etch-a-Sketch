const container = document.getElementById("container");

let numOfElements = 16;

for (let i = 1; i <= numOfElements; i++) {
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
const counter = document.getElementById("counter");
counter.textContent = `# of Squares Per Side: `

function removeElements(nodeList){
    // Loop through nodelist
    for (node of nodeList){
        container.removeChild(node);
    }
}

function buildGrid(gridLength){
    // Remove initially created div elements
    // Call nodeList of grid elements
    const grids = document.querySelectorAll(".gridElement");
    // call function on node list
    removeElements(grids);
    // Build vertical divs on outside loop
    for(i=0; i<gridLength; i++){
        // Build horizontal divs on inside loop
        const rowDiv = document.createElement("div");
        div.id = `row${i}`;
        div.classList.add("rowElement");
        for(i=0; i<gridLength; i++){
        // Divide 100% by number of units, maybe create a helper function to calculate width per unit
        // Append square divs into row divs
        }
        container.appendChild(div);
    }
    // Append div to container
}

// Reference button
const button = document.getElementById("elementButton");
// Create event listener for clicking button
button.addEventListener("click", (event) => {
    inputGridLength = parseInt(prompt("How many squares per side would you like for the grid?"),10);
    while (inputGridLength > 100){
        inputGridLength = parseInt(prompt("A grid length larger than 100 is not enabled! Please try another value."), 10);
    }

    while (typeof(inputGridLength) != 'number'){
        console.log(typeof(inputGridLength));
        inputGridLength = parseInt(prompt("Please enter a number value betweeen 1 and 100."), 10);
        while (isNaN(inputGridLength)){
            inputGridLength = parseInt(prompt("Please enter a number value betweeen 1 and 100."), 10);
        }
    }

    console.log(inputGridLength);
    // Call function using inputGridLength that redistributes the grid
    buildGrid(inputGridLength);
});




