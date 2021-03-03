function createGrid(){
    const container = document.querySelector('#divContainer');
    const gridDiv = document.createElement('div');
    gridDiv.setAttribute('class','gridSquare');
    container.appendChild(gridDiv);
}

function changeGridSize(n){
    let squareHeight = toString(parseInt(800/n));
    let squareWidth = toString(parseInt(800/n));
    let squares = document.querySelectorAll('.gridSquare');
    let container = document.querySelector('#divContainer');

    for(let i = 0; i<n;i++){
        squares[i].style.width = squareWidth;
        squares[i].style.height = squareHeight;
    }

    
    container.style.gridTemplateColumns = `${squareWidth}px ${squareWidth}px ${squareWidth}px ${squareWidth}px`;
    
}

for(let i=0; i<16; i++){
    createGrid();
}

function clearSquares(){
    let clear = document.querySelectorAll('.gridSquare');
    for(let i = 0; i < clear.length;i++){
        clear[i].remove();
    }

}


function createSketchBox(){
    clearSquares();

    let n = prompt('What size?', '16');
    n = parseInt(n);

    for(let i = 0; i < n; i++){
        createGrid();
    }

    changeGridSize(n);

}

const reset = document.querySelector('button');
reset.addEventListener('click',createSketchBox);
