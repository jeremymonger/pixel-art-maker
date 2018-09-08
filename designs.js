// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid(rows, cols) {
  const pixelCanvas = document.getElementById('pixelCanvas');

  for (let row = 1; row <= rows; row++){
    let newRow = document.createElement('tr');
    for(let col = 1; col <= cols; col++){
      let newCol = document.createElement('td');
      newRow.appendChild(newCol);
    }
    pixelCanvas.appendChild(newRow);
  }

}
makeGrid(6,6);
