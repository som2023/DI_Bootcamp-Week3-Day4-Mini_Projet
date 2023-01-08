/*@@@@@@@@@@@---MINI_PROFET-----@@@@@@@@@@@@@@@@@@@@@@@*/

let color = null;
let mouseDown = false;

// Get Body Element index 0
let getBody = document.getElementsByTagName("body")[0];

// Get all Children of sidebar
let  getSidebar = document.querySelectorAll("#sidebar > *");

// Get all children of main "div"
let getMain= document.querySelectorAll("#main > *");
// Get button element index 0
let getBtn = document.getElementsByTagName("button")[0];

//
clear_button.addEventListener("click", () => {
    for (item1 of getMain){
        item1.style.backgroundColor = "white";
    }
});

//
getBody.addEventListener("mousedown", () => {
    mouseDown = true;
})

//
getBody.addEventListener("mouseup", () => {
    mouseDown = false;
})

//
for (item of getSidebar){
    item.addEventListener("click", (e) => {
        color = e.target.style.backgroundColor;
    });
}

// 
for (item1 of getMain){
    item1.addEventListener("mousedown", (e) => {
        if (color != null) e.target.style.backgroundColor = color;
    });
    item1.addEventListener("mouseover", (e) => {
        if (mouseDown && color != null) e.target.style.backgroundColor = color;
    });
}