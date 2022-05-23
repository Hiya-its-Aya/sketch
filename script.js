const container = document.querySelector("#container");
const grid = document.createElement('div')

// soon will take input
function takeInput(){
    let userNum = prompt("Pick a number between 1 and 100.");
    while(userNum < 0 || userNum > 100){
      userNum = prompt("Pick a number between 1 and 100.")
    }
        return userNum;
}

let num = takeInput();

//make grid
for(let i=0; i < (num*num); i++){
    const grid = document.createElement('div')
    grid.classList.add("grid");
    container.appendChild(grid);
    let percent = 600/num;
    grid.style.width = percent-2 + "px";
    grid.style.height = percent-2 + "px";
}

const countAll = document.querySelectorAll('.grid').length;
console.log(countAll);


//make hover action
let box = container.children
for(let i=0; i < (num*num); i++){
    box[i].addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "black";
    });
}



