function createGrid(i){
    const container = document.querySelector('#divContainer');
    const gridDiv = document.createElement('div');
    gridDiv.setAttribute('class','gridSquare');
    gridDiv.setAttribute('id',`div${i}`);
    gridDiv.setAttribute('style','opacity: 0');
    container.appendChild(gridDiv);
}


for(let i=0; i<16*16; i++){
    createGrid(i);
}


function changeGridSize(n){
    let squareHeight = 640/n;
    let squareWidth = 640/n;
    let squares = document.querySelectorAll('.gridSquare');
    let container = document.querySelector('#divContainer');
    let gridString='';
    

    for(let i = 0; i<n*n; i++){
        squares[i].style.width = squareWidth + 'px';
        squares[i].style.height = squareHeight + 'px';
        
        
    }
    for(let j =0; j<n;j++){
        gridString+=squareHeight + 'px ';
    }

    console.log(gridString);

    container.style.gridTemplateColumns = gridString;
    
}

function clearSquares(){
    let clear = document.querySelectorAll('.gridSquare');
    for(let i = 0; i < clear.length;i++){
        clear[i].remove();
    }

}


function createSketchBox(){
    clearSquares();

    let n = prompt('What Size? Please enter a square number', '16');
    n = parseInt(n);



    for(let i = 0; i < n*n; i++){
        createGrid(i);
    }

    changeGridSize(n);
    const divToChange = document.querySelectorAll('.gridSquare');
    divToChange.forEach(div => div.addEventListener('mouseover',changeColor));
}

function generateRandomColor()
{
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function changeColor(e){
    let newId = e.target.id;
    let idString = document.querySelector(`#${newId}`);
    let opacity = idString.style.opacity;
    let newOpacity = parseFloat(opacity)+.1;
    
    idString.style.opacity = `${newOpacity}`;
    

}



const reset = document.querySelector('button');
reset.addEventListener('click',createSketchBox);

const divToChange = document.querySelectorAll('.gridSquare');
divToChange.forEach(div => div.addEventListener('mouseover',changeColor));
