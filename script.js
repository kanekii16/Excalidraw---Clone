const canvas = document.getElementById("drawing-board");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false ;
let brushWidth = 1;


const ctx = canvas.getContext('2d');

// window.addEventListener('load',()=>{
    
// })

const drawing = (e) =>{
    if(!isDrawing)return;
    //creates line according to mouse pointer.
    ctx.lineTo(e.offsetX,e.offsetY); 
    ctx.stroke();//without this the line would not be visible this makes line visible.
    
}

const intiateDraw = () =>{
    isDrawing = true;
    ctx.beginPath();
    ctx.lineWidth = brushWidth;
}

const abortDraw = () =>{
    isDrawing = false;
}


canvas.addEventListener('mousemove',drawing);
canvas.addEventListener('mousedown',intiateDraw);
canvas.addEventListener('mouseup',abortDraw);


const draw_btn = document.getElementById("draw");

draw_btn.addEventListener('click',()=>{
    const subMenu = document.getElementById("sub_menu");
    subMenu.classList.toggle('show');
    console.log("clicked");
})


// Adding color to display btn.

const list = document.getElementsByClassName("color_btn");
const displayBtn = document.getElementById("display-btn");
// getelements by class name returns html collection of elements in order to interate over them we can use Array.from(list).forEach(()=>{function definition});
Array.from(list).forEach(element => {
    element.addEventListener('click',()=>{
        let style = getComputedStyle(element);
        displayBtn.style.backgroundColor = style.backgroundColor;
        changeStroke();    
    })
});


const listTwo = document.getElementsByClassName("background_btn");
const backgroundBtn = document.getElementById("background-btn");
// getelements by class name returns html collection of elements in order to interate over them we can use Array.from(list).forEach(()=>{function definition});
Array.from(listTwo).forEach(element => {
    element.addEventListener('click',()=>{
        let style = getComputedStyle(element);
        backgroundBtn.style.backgroundColor = style.backgroundColor;    
    })
});

function changeStroke(){
    
}