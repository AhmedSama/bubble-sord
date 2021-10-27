const canvas = document.querySelector("canvas");

const WIDTH = 900;
const HIGHT = 700;
canvas.width = WIDTH;
canvas.height = HIGHT
const c = canvas.getContext("2d");
const gap = 1;
let poles = [];
//FUNCTIONS
function rand(min,max){
    return Math.floor(Math.random()*(max-min))+min
}
function bubbleSort(polesArray){
    for(let i = 0; i < polesArray.length; i++){
        for(let j = 0; j < polesArray.length - i-1; j++){
            if(polesArray[j].position.y < polesArray[j+1].position.y){
                swap(polesArray,j,j+1);
            }
        }
    }
    // console.log(polesArray);
}

function swap(polesArray, pos1, pos2) {

    let term = polesArray[pos1].position.y;
    polesArray[pos1].position.y = polesArray[pos2].position.y;
    polesArray[pos2].position.y = term;
}

// let arr = [3, 7, 2, 9, 1, 8, 5, 4, 6];
// bubbleSort(arr);
// console.log(arr);
//CLASSES
const background = {
  position: new Vector2(0,0),
  color: "rgba(34,4,56,1)",
  draw: function() {
    c.beginPath();
    // c.clearRect(this.position.x,this.position.y,WIDTH,HIGHT);
    c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, WIDTH, HIGHT);
    c.fill();
    c.closePath();
  },
};

class Pole {
  constructor(width, pos) {
    this.position = pos;
    this.color = "rgba(240,170,200,1)";
    this.width = width;
  }
  draw() {
    c.beginPath();
    c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, this.width,HIGHT - this.position.y);
    c.fill();
    c.closePath();
  }
}

for(let i = 0; i < 29; i++){
    poles.push(new Pole(30,new Vector2(0 +(30+gap)*i,rand(50,600))));
}
// bubbleSort(poles)
let i = 0;
let j = 0;
let bubbleSorting = setInterval(() => {
  if (i < poles.length) {
        if (j < poles.length - i - 1) {
            poles[j].color = "rgba(100,170,188,1)";
            if (poles[j].position.y < poles[j + 1].position.y) {
                swap(poles, j, j + 1);
                poles[j+1].color = "rgba(100,170,188,1)";
                poles[j].color = "rgba(240,170,200,1)";
            }

            poles[j].color = "rgba(240,170,200,1)";
            j++;

            
        } 
        else {
            poles[j].color = "rgba(100,170,188,1)";
            j = 0;
            i++;
        }
  } 
  else {
        console.log("done!")
        clearInterval(bubbleSorting);
    }
    }, 10);
function update(){
    requestAnimationFrame(update);
    background.draw();
    for(let pole of poles)
        pole.draw();
}
update();










