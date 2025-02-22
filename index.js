// Select the <ul> element and remove it from the DOM
document.querySelector("ul").remove();
// Create a new <h1> element 
const newHeader = document.createElement("h1");
// Set the id of newHeader the "victory"
newHeader.id = "victory";
// Set the text content of newHeader
newHeader.textContent = "Romyrose is the champion";
// Append the new <h1> to the body
document.body.appendChild(newHeader);