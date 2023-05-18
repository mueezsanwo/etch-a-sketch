// the parent element where you want to add the divs
// const container = document.getElementById('container')
// create multiple divs
// for (let i = 0; i < 5; i++) {
    // create a new div element
    // const div = document.createElement('div')

    // style or add content to the div
    // div.textContent = 'Div ' + (i + 1);

    // append the div to the parent element
    // container.appendChild(div)
// }

// create a 16*16 grid

const gridContainer = document.getElementById('grids');
const gridWrapper = document.getElementById('container')
let passCount = 0;

function createGrid(size) {
    // clear existing grid
    while (gridContainer.firstChild) {
        gridContainer.firstChild.remove();
    }

    // calculate grid size
    const cellSize = 700 / size;

    // create new grid
    gridContainer.style.gridTemplateColumns = `repeat(${size}, ${cellSize}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, ${cellSize}px)`;

    for (let i =0; i < size; i++){
        for (let j = 0; j < size; j++) {
         const cell = document.createElement('div')
         cell.classList.add('cell');
         gridContainer.appendChild(cell);
        } 
     }

}

function promptUser() {
    const gridSize = prompt('Enter the number of squares per side (max 100):');
    const size = parseInt(gridSize);

    if (!isNaN(size) && size > 0 && size <= 100) {
      createGrid(size);
      passCount = 0;
      addEventListener();
    } else {
      alert('Invalid input. Please enter a number between 1 and 100.');
    }
  }

//   function getRandomColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
//   }

//   function darkenColor(color) {
//     const rgb = color.replace(/[^\d,]/g, '').split(',');
//     const r = Math.floor(parseInt(rgb[0]) * 0.9);
//     const g = Math.floor(parseInt(rgb[1]) * 0.9);
//     const b = Math.floor(parseInt(rgb[2]) * 0.9);
//     return `rgb(${r}, ${g}, ${b})`;
//   }

//   function handleCellHover(e) {
//     const cell = e.target;
//     const currentColor = window.getComputedStyle(cell).backgroundColor;

//     if (passCount >= 10) {
//       cell.style.backgroundColor = 'black';
//     } else {
//       cell.style.backgroundColor = darkenColor(currentColor) || getRandomColor();
//       passCount++;
//     }
//   }

//   function addCellEventListeners() {
//     const cells = gridContainer.querySelectorAll('.cell');
//     cells.forEach(cell => {
//       cell.addEventListener('mouseover', handleCellHover);
//     });
//   }

//   createGrid(16); // Initial grid size
//   addCellEventListeners();



