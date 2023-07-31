// need to create functionality
// creating functionality for elements: create notes button

const notes_container = document.querySelector(".notes-container");
const create_btn = document.querySelector(".btn");
// select all notes so we can iterate through
const notes = document.querySelectorAll(".input-box");

function show_notes (){
    notes_container.innerHTML = localStorage.getItem("notes");
}

show_notes();

function update_storage() {
    localStorage.setItem("notes", notes_container.innerHTML);
}
// add event listener to create button which is an onclick even which triggers a function which creates a paragraph element and saves to varaible name input_box then create img element, give input_box a class name and attribute, then give img element a src of delete icon and append child of notes_container with img nested in input_box
create_btn.addEventListener("click", ()=> {
    let input_box = document.createElement("p");
    let img = document.createElement("img");
    input_box.className = "input-box";
    // TODO CHECK CORRECT SPELLING
    input_box.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notes_container.appendChild(input_box).appendChild(img)

})

// target notes_container element, add event listener of function with event parameter which we use to evaluate if its the targeted element is an image element we'll remove the parent element i.e. using the delete icon and execute updateStorage(), else if the event target tagname is equal to a paragraph element we will select all elements reassign to variable notes which has already been declared and save the documentation to localStorage using a forEach iterative function with paramter nt (notes) on keyup which is an event attribute which executes when a key is lifted up (released) in any of the nt elements
notes_container.addEventListener("click", (e)=> {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        update_storage();
    } else if (e.target.tagName === "p") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                update_storage();
            }
        })

    }
})

// add local storage

// Allows enter key to execute a linebreak
document.addEventListener("keydown", event => {
    if(event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})