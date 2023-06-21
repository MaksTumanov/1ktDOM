//1

var numbers = [];
for (var i = 0; i < 30; i++) {
  numbers.push(Math.floor(Math.random() * 100));
}

var table = document.querySelector('table');

for (var i = 0; i < 5; i++) {
  var row = document.createElement('tr');
  for (var j = 0; j < 6; j++) {
    var cell = document.createElement('td');
    var index = i * 6 + j;
    var number = numbers[index];
    cell.textContent = number;
    if (number >= 50) {
      cell.style.backgroundColor = 'orange';
    }
    row.appendChild(cell);
  }
  table.appendChild(row);
}

//2

function addNumberToTable() {
    var number = Math.floor(Math.random() * 100);
    numbers.push(number);
  
    var lastRowIndex = Math.floor((numbers.length - 1) / 6);
    var lastRow = table.querySelector('tr:nth-of-type(' + (lastRowIndex + 1) + ')');
    if (!lastRow) {
      lastRow = document.createElement('tr');
      table.appendChild(lastRow);
    }
  
    var indexInLastRow = (numbers.length - 1) % 6;
    var cell = document.createElement('td');
    cell.textContent = number;
  
    if (number >= 50) {
      cell.style.backgroundColor = 'orange';
    }
  
    lastRow.appendChild(cell);
  }
  