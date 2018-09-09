function processGrid(){
  // Gets the inputs ready for makeGrid()
  let inputHeight = document.getElementById('inputHeight');
  rows = inputHeight.value;
  let inputWidth = document.getElementById('inputWidth');
  cols = inputWidth.value;
  makeGrid(rows,cols)
}

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
function pickColor(event){
  // Sets the color of the colorPicker and pixels.
  clickColor = event.target.value;
  colorPicker.value = clickColor;
}

const formSubmit = document.getElementById('formSubmit');
formSubmit.addEventListener('click', processGrid);
let clickColor = "#000000";
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('change', pickColor);
