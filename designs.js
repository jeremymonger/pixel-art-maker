function makeGrid(rows, cols) {
// Takes two numbers, and uses them to make a grid/table.
  const pixelCanvas = document.getElementById('pixelCanvas');
  pixelCanvas.innerHTML = ''; // Clears table, allowing users to 'reset'

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
makeGrid(1,4);
