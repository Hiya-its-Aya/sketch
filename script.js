const container = document.querySelector("#container");
const grid = document.createElement('div')
const gridChoice = document.querySelector(".grid-choice")




function takeInput(){
    let userNum = prompt("Pick a number between 1 and 100.");
    while(userNum < 0 || userNum > 100){
      userNum = prompt("Pick a number between 1 and 100.")
    }
        console.log(userNum);
        return userNum;  
}



let num = takeInput();


//make grid
function getGrid(){
    let width = document.getElementById("container").clientWidth - 40; // 40 = padding in CSS
    for(let i=0; i < (num*num); i++){
        const grid = document.createElement('div')
        grid.classList.add("grid");
        container.appendChild(grid);
        let percent = (width/num);
        grid.style.width = percent -1  + "px";
        grid.style.height = percent -1 + "px";
    }
}



const countAll = document.querySelectorAll('.grid').length;
console.log(countAll);

getGrid()

// gridChoice.addEventListener('click', getGrid()); 

//make hover action
let box = container.children
for(let i=0; i < (num*num); i++){
    box[i].addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "black";
    });
}

// gridChoice.addEventListener('click', takeInput); 
