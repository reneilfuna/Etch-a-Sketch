const container = document.getElementById("container");

for (let i = 1; i <= 4; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.id = `rowDiv${i}`;
    rowDiv.classList.add("rowElement");
    container.appendChild(rowDiv);
    for (let i = 1; i <= 4; i++){
        const gridDiv = document.createElement("div");
        gridDiv.id = `gridDiv${i}`;
        gridDiv.classList.add("gridElement");
        rowDiv.appendChild(gridDiv);
    }
}

// Set up a “hover” effect so that the grid divs change color 
// when your mouse passes over them, leaving a (pixelated) trail 
// through your grid like a pen would.

// Rather than squares being the same color throughout the grid, 
// randomize the squares’ RGB values with each interaction.

// Reference button
const colorBtn = document.getElementById("colorChange");

colorBtn.addEventListener("click", (event) => {
    if (colorBtn.textContent == "Colour Mode: Off"){
        colorBtn.textContent = "Colour Mode: On";
    }
    else{
        colorBtn.textContent = "Colour Mode: Off";
    } 
});



// Create 2 listener functions using event delegation

// Create 1 listener function for mouseover event
 container.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (colorBtn.textContent = "Colour Mode: Off"){
        if (target.className == "gridElement")
            target.setAttribute("class", "overGridElement")
    }
    else if (colorBtn.textContent = "Colour Mode: On"){
        if (target.className == "gridElement"){
            target.setAttribute("class", "overColorElement")
            target.style["background-color"] = randomRGB();
        }
    }
 });

// Create 1 listetner function for mouseout event
container.addEventListener("mouseout", (event) => {
    let target = event.target;
    if (target.className == "overGridElement"){

        setTimeout(function() {
            target.setAttribute("class", "gridElement");
        }, 10000);

        console.log("its working i think");
    }
 });

//  Add a button on the top of the screen that will send the user a popup 
//  asking for the number of squares per side for the new grid. Once entered, 
//  the existing grid should be removed, and a new grid should be generated 
//  in the same total space as before (e.g., 960px wide) so that you’ve got 
//  a new sketch pad.

function removeElements(nodeList){
    // Loop through nodelist
    for (node of nodeList){
        container.removeChild(node);
    }
}

function fractionToPercent(gridLength){
    percentage = (100 / gridLength);
    return percentage.toFixed(2);
}

function buildGrid(gridLength){
    // Remove initially created div elements
    // Call nodeList of grid elements
    const grids = document.querySelectorAll(".rowElement");
    // call function on node list
    removeElements(grids);
    gridUnit = fractionToPercent(gridLength);
    console.log(gridUnit);
    // Build vertical divs on outside loop
    for (let i = 1; i <= gridLength; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.id = `rowDiv${i}`;
        rowDiv.classList.add("rowElement");
        rowDiv.style.height = `${gridUnit}%`;
        container.appendChild(rowDiv);
        for (let i = 1; i <= gridLength; i++){
            const gridDiv = document.createElement("div");
            gridDiv.id = `gridDiv${i}`;
            gridDiv.classList.add("gridElement");
            gridDiv.style.width = `${gridUnit}%`;
            rowDiv.appendChild(gridDiv);
        }
    }    
}

// Reference button
const gridBtn = document.getElementById("elementButton");
// Create event listener for clicking button
gridBtn.addEventListener("click", (event) => {
    inputGridLength = parseInt(prompt("How many squares per side would you like for the grid?"),10);
    while (inputGridLength > 100 || inputGridLength < 1){
        inputGridLength = parseInt(prompt("Please enter a number value betweeen 1 and 100."), 10);
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
