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
function colorSquare(event){
  //Colors a square
  if (event.target.nodeName === "TD"){
    event.target.style.backgroundColor = clickColor;
  }
}
const pixelCanvas = document.getElementById('pixelCanvas');
const formSubmit = document.getElementById('formSubmit');
const colorPicker = document.getElementById('colorPicker');
let clickColor = "#000000";
formSubmit.addEventListener('click', processGrid);
colorPicker.addEventListener('change', pickColor);
pixelCanvas.addEventListener('click', colorSquare);
