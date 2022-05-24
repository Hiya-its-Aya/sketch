const container = document.querySelector("#container");
const grid = document.createElement('div')

const gridChoice= document.querySelector("#grid-choice")

gridChoice.addEventListener('click', getGrid); 


function takeInput(){
    let userNum = prompt("Pick a number between 1 and 100.");
    while(userNum <= 0 || userNum > 100){
      userNum = prompt("Pick a number between 1 and 100.")
    }
        console.log(userNum);
        return userNum;  
}


//make grid
function getGrid(){
    // reset();
    //make a reset function
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
}


//reset function (use for erase & before start of getGrid)
// function reset(){
//     let num = takeInput()
//     for(i= 0; i <(num*num); i++)
//     con
// }

