const inputtaskElement = document.getElementById("inputtaskElement");
const addnewtaskbtn = document.getElementById("addnewtaskbtn");
const clearAllbtn = document.getElementById("clearAllbtn");
const toDos = document.getElementById("toDos");

let toDosList = [];

function addNewTask() {
  const task = inputtaskElement.value.trim();
  if (task === "") {
    alert("Please enter a valid task name!");
    return;
  }
  toDosList.push(task);
  inputtaskElement.value = ""; 
  renderToDos();
}

function renderToDos() {
  toDos.innerHTML = toDosList.map((td, i) => `
    <div class="list-group-item d-flex justify-content-between align-items-center mb-2 rounded border">
      <span>${td}</span>
      <button class="btn btn-danger btn-sm" onclick="deleteTask(${i})">Delete</button>
    </div>
  `).join("");
}

function deleteTask(index) {
  toDosList.splice(index, 1);
  renderToDos();
}

clearAllbtn.addEventListener("click", () => {
  toDosList = [];
  renderToDos();
});

addnewtaskbtn.addEventListener("click", addNewTask);

const inputmarksElement = document.getElementById("inputmarksElement");
const addnewmarksbtn = document.getElementById("addnewmarksbtn");
const calculateTotalMarksbtn = document.getElementById("calculateTotalMarksbtn");
const clearAllmarksbtn = document.getElementById("clearAllmarksbtn");
const marksDisplayElement = document.getElementById("marksdisplay");
const enteredMarksTracker = document.getElementById("enteredMarksTracker");

let marksList = []; 

function addNewMarks() {
  const rawValue = inputmarksElement.value.trim();
  if (rawValue === "" || isNaN(rawValue)) {
    alert("Please enter a valid numeric mark score!");
    return;
  }
  const newMarks = Number(rawValue);
  marksList.push(newMarks);
  enteredMarksTracker.innerText = `Current entered values array: [ ${marksList.join(", ")} ]`;
  inputmarksElement.value = ""; 
}

function calculate() {
  if (marksList.length === 0) {
    marksDisplayElement.innerHTML = `
      <div class="alert alert-warning">No marks added yet! Please input scores first.</div>
    `;
    return;
  }

  const totalMarks = marksList.reduce((acc, mark) => acc + mark, 0);
  let highestMarks = marksList[0];
  let lowestMarks = marksList[0];

  for (let i = 1; i < marksList.length; i++) {
    if (marksList[i] > highestMarks) {
      highestMarks = marksList[i];
    }
    if (marksList[i] < lowestMarks) {
      lowestMarks = marksList[i];
    }
  }

  const averageMarks = totalMarks / marksList.length;
  marksDisplayElement.innerHTML = `
    <div class="p-3 bg-light border rounded">
      <p class="mb-1 text-dark"><strong>Total Marks:</strong> ${totalMarks}</p>
      <p class="mb-1 text-dark"><strong>Average Marks:</strong> ${averageMarks.toFixed(2)}</p>
      <p class="mb-1 text-success"><strong>Highest Mark:</strong> ${highestMarks}</p>
      <p class="mb-0 text-danger"><strong>Lowest Mark:</strong> ${lowestMarks}</p>
    </div>
  `;
}

addnewmarksbtn.addEventListener("click", addNewMarks);
calculateTotalMarksbtn.addEventListener("click", calculate);

clearAllmarksbtn.addEventListener("click", () => {
  marksList = [];
  enteredMarksTracker.innerText = "";
  marksDisplayElement.innerHTML = "";
  inputmarksElement.value = "";
});

const carArray = ["Audi", "BMW", "Mercedes", "Ford", "Toyota"];

function searchCar() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const resultDisplay = document.getElementById("searchResult");

  if (!query) {
    resultDisplay.innerText = "Please enter a search term.";
    resultDisplay.className = "fw-bold mb-3 text-warning";
    return;
  }

  const match = carArray.find(car => car.toLowerCase() === query);

  if (match) {
    resultDisplay.innerText = match;
    resultDisplay.className = "fw-bold mb-3 text-success fs-5"; 
  } else {
    resultDisplay.innerText = "No matches found";
    resultDisplay.className = "fw-bold mb-3 text-danger fs-5";
  }
}

let singleNumberStorage = [];

function addSingleNumber() {
  const input = document.getElementById("singleNumberInput");
  const val = input.value.trim();

  if (val === "" || isNaN(val)) {
    alert("Please enter a valid number!");
    return;
  }

  singleNumberStorage.push(Number(val));
  input.value = ""; 
}

function showEvenNumbers() {
  const evenOutput = document.getElementById("evenNumbersOutput");
  const evens = singleNumberStorage.filter(num => num % 2 === 0);
  evenOutput.innerText = evens.length > 0 ? evens.join(", ") : "";
}

function showOddNumbers() {
  const oddOutput = document.getElementById("oddNumbersOutput");
  const odds = singleNumberStorage.filter(num => num % 2 !== 0);
  oddOutput.innerText = odds.length > 0 ? odds.join(", ") : "";
}

function clearSingleFilter() {
  singleNumberStorage = [];
  document.getElementById("singleNumberInput").value = "";
  document.getElementById("evenNumbersOutput").innerText = "";
  document.getElementById("oddNumbersOutput").innerText = "";
}

let namesStorageArray = [];

function addName() {
  const nameInput = document.getElementById("nameInput");
  const nameValue = nameInput.value.trim();

  if (nameValue === "") {
    alert("Please enter a valid name string first!");
    return;
  }

  const formattedName = nameValue.charAt(0).toUpperCase() + nameValue.slice(1);
  namesStorageArray.push(formattedName);
  nameInput.value = ""; 
  updateNamesDisplay();
}

function sortNames() {
  namesStorageArray.sort((a, b) => a.localeCompare(b));
  updateNamesDisplay();
}

function updateNamesDisplay() {
  const displayBox = document.getElementById("namesDisplayOutput");
  displayBox.innerText = namesStorageArray.length > 0 ? namesStorageArray.join(", ") : "";
}

function resetNames() {
  namesStorageArray = [];
  document.getElementById("nameInput").value = "";
  updateNamesDisplay();
}