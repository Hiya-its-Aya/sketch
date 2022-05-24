const container = document.querySelector("#container");

const text = document.querySelector('#text')


const gridChoice= document.querySelector("#grid-choice")
const eraseButton = document.querySelector("#eraser")
// const deff = document.querySelector("#default")



//does getGrid at 16 only --default
// I'm sure there is a better way but this works for now
function def(){
    let num = 16;
    container.setAttribute('style', `grid-template-columns: repeat(${num}, 2fr); grid-template-rows: repeat(${num}, 2fr);`);
    for(let i=0; i < (num*num); i++){
        const grid = document.createElement('div')
        grid.classList.add("grid");
        container.appendChild(grid);
    }
    let box = container.children
    for(let i=0; i < (num*num); i++){
        box[i].addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = "black";
        });
    }
    const numText = document.createElement('h2')
    numText.classList.add("numText");
    text.appendChild(numText);
    numText.textContent = "Grid:" + num + " x " + num
}

def();


//gets new grid 
gridChoice.addEventListener('click', getGrid); 

//erases
eraseButton.addEventListener('click', erase);

// deff.addEventListener('click', def);

//take user input via promp
function takeInput(){
    let userNum = prompt("Pick a number between 1 and 100.");
    while(userNum <= 0 || userNum > 100){
      userNum = prompt("Pick a number between 1 and 100.")
    }
        // console.log(userNum);
        return userNum;  
}


//make grid and sketch functionality
function getGrid(){
    reset();
    let num = takeInput();
    container.setAttribute('style', `grid-template-columns: repeat(${num}, 2fr); grid-template-rows: repeat(${num}, 2fr);`);
    for(let i=0; i < (num*num); i++){
        const grid = document.createElement('div')
        grid.classList.add("grid");
        container.appendChild(grid);
    }
    let box = container.children
    for(let i=0; i < (num*num); i++){
    box[i].addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "black";
    });
    }
    const numText = document.createElement('h2')
    numText.classList.add("numText");
    text.appendChild(numText);
    numText.textContent = "Grid:" + num + " x " + num
}

//erases current grid 
function erase(){
    let box = container.children
    for(let i = box.length-1; i>=0; i--){
        box[i].style.backgroundColor = "white"
    }
}


//reset function used before getting grid due to weird stacking
    //issues when button pressed before page reload 
    //also keeps current grid text 
function reset(){
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    while(text.lastChild){
        text.removeChild(text.lastChild)
    }
}

