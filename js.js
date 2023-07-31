// need to create functionality
// creating functionality for elements: create notes button

const notes_container = document.querySelector(".notes-container");
const create_btn = document.querySelector(".btn");
// select all notes so we can iterate through
const notes = document.querySelectorAll(".input-box");


// add event listener to create button which is an onclick even which triggers a function which creates a paragraph element and saves to varaible name input_box then create img element, give input_box a class name and attribute, then give img element a src of delete icon and append child of notes_container with img nested in input_box
create_btn.addEventListener("click", ()=> {
    let input_box = document.createElement("p");
    let img = document.createElement("img");
    input_box.className = "input-box";
    // TODO CHECK CORRECT SPELLING
    input_box.setAttributes("contenteditable", "true");
    img.src = "images/delete.png";
    notes_container.appendChild(input_box).appendChild(img)

})