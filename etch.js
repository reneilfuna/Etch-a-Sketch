const container = document.getElementById("container");

const div1 = document.createElement("div");
div1.setAttribute("class", "gridElement");
const div2 = document.createElement("div");
div2.setAttribute("class", "gridElement");
const div3 = document.createElement("div");
div3.setAttribute("class", "gridElement");
const div4 = document.createElement("div");
div4.setAttribute("class", "gridElement");
const div5 = document.createElement("div");
div5.setAttribute("class", "gridElement");
const div6 = document.createElement("div");
div6.setAttribute("class", "gridElement");
const div7 = document.createElement("div");
div7.setAttribute("class", "gridElement");
const div8 = document.createElement("div");
div8.setAttribute("class", "gridElement");
const div9 = document.createElement("div");
div9.setAttribute("class", "gridElement");
const div10 = document.createElement("div");
div10.setAttribute("class", "gridElement");
const div11 = document.createElement("div");
div11.setAttribute("class", "gridElement");
const div12 = document.createElement("div");
div12.setAttribute("class", "gridElement");
const div13 = document.createElement("div");
div13.setAttribute("class", "gridElement");
const div14 = document.createElement("div");
div14.setAttribute("class", "gridElement");
const div15 = document.createElement("div");
div15.setAttribute("class", "gridElement");
const div16 = document.createElement("div");
div16.setAttribute("class", "gridElement");

// Set up a “hover” effect so that the grid divs change color 
// when your mouse passes over them, leaving a (pixelated) trail 
// through your grid like a pen would.

// Create 2 listener functions using event delegation

// Create 1 listener function for mouseenter event
 container.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.className == "gridElement")
        console.log("found me")
 });
// 2 options:
// If mouseenter a grid element
// Either:
// + Change class of element
// or
// Highlight element using custom function

// Create 1 listetner function for mouseleave event

container.appendChild(div1);
container.appendChild(div2);
container.appendChild(div3);
container.appendChild(div4);
container.appendChild(div5);
container.appendChild(div6);
container.appendChild(div7);
container.appendChild(div8);
container.appendChild(div9);
container.appendChild(div10);
container.appendChild(div11);
container.appendChild(div12);
container.appendChild(div13);
container.appendChild(div14);
container.appendChild(div15);
container.appendChild(div16);

