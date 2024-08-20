let div = document.querySelector(".container");
let getNum = document.getElementById("getnum");
let num;

drawgrid(16);

getNum.addEventListener("click", event => {
  let userInput = prompt("Please enter squares per side (from 1 to 100): ");

  if(userInput < 1 || userInput > 100){
    alert("out of range");
    userInput = prompt("Please enter squares per side (from 1 to 100): ");
  }
  else{
    newGrid(userInput);
  }
})
        
function drawgrid(num){
  for(i = 0; i < num; i++){
  const row = document.createElement("div");
  row.className = "row";
              
    for(j = 0; j < num; j++){
      const btn = document.createElement("button");
      btn.className = "square";
      btn.style.width = (960/num).toString() + 'px';
      btn.style.height = (960/num).toString() + 'px';
      row.appendChild(btn);
      btn.addEventListener("mouseover", event => {
        btn.style.backgroundColor = randomColor();
      })
    }
    div.appendChild(row)
  }
}

function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
    return 'rgb(' + color.join(', ') + ')';
}

function newGrid(num){
  div.innerHTML = '';
  drawgrid(num);
}
 