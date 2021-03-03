function createGrid(){
    const container = document.querySelector('#divContainer');
    const gridDiv = document.createElement('div');
    gridDiv.setAttribute('class','gridSquare');
    container.appendChild(gridDiv);
}


for(let i=0; i<16; i++){
    createGrid();
}


function changeGridSize(n){
    let squareHeight = 800/Math.sqrt(n,2);
    let squareWidth = 800/Math.sqrt(n,2);
    let squares = document.querySelectorAll('.gridSquare');
    let container = document.querySelector('#divContainer');
    let gridString='';
    

    for(let i = 0; i<n; i++){
        squares[i].style.width = squareWidth + 'px';
        squares[i].style.height = squareHeight + 'px';
        
        
    }
    for(let j =0; j<Math.sqrt(n,2);j++){
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

    let n = prompt('What size?', '16');
    n = parseInt(n);

    for(let i = 0; i < n; i++){
        createGrid();
    }

    changeGridSize(n);

}

const reset = document.querySelector('button');
reset.addEventListener('click',createSketchBox);
