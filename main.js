const gridContainer = document.querySelector('.grid-container');
const resetButton = document.getElementById('reset-button');

// Default grid size
let size = 16;

function createDiv() {
    const div = document.createElement('div');
    div.id = 'grid-item';
    gridContainer.appendChild(div);
}


function grid(size) {
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


grid(size);

function reset() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    size = parseInt(prompt('Please enter size of the new grid (60 max): '));
    while (size > 60) {
        size = parseInt(prompt('Please enter size of the new grid (60 max): '));
    }
    grid(size);
}

resetButton.addEventListener('click', () => reset());




