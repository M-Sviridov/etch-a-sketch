const gridContainer = document.querySelector('.grid-container');
const resetButton = document.getElementById('reset-button');


function createDiv() {
    const div = document.createElement('div');
    div.id = 'grid-item';
    gridContainer.appendChild(div);
}


function defaultGrid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            createDiv();
        }
    }
    const gridItem = document.querySelectorAll('#grid-item');
    gridItem.forEach(grid => {
        grid.addEventListener('mouseenter', () => {
            grid.style.backgroundColor = '#495057';
        })
    });
}

defaultGrid();


function newGrid(size) {
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr);
        grid-template-rows: repeat(${size}, 1fr);`);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            createDiv();
        }
    }
    const gridItem = document.querySelectorAll('#grid-item');
    gridItem.forEach(grid => {
        grid.addEventListener('mouseenter', () => {
            grid.style.backgroundColor = '#495057';
        })
    });
}


function reset() {
    const size = parseInt(prompt('Please enter size of the new grid: '));
    newGrid(size);
}

resetButton.addEventListener('click', () => reset());




