var garage = [];

function boost(x) {
  garage[x].speed = x.speed * 2;
  renderTable();
}
function unBoost(x) {
  garage[x].speed = x.speed / 2;
  renderTable();
}
function makeAvailable(x) {
  garage[x].isAvailable = true;
  renderTable();
}
function makeUnavailable(x) {
  garage[x].isAvailable = false;
  renderTable();
}

function decideAvailableOrNot(x) {
  if (garage[x].isAvailable) {
    return "Disponible";
  } else {
    return "Indisponible";
  }
}

var table = document.getElementById("table").getElementsByTagName("tbody")[0];

function renderTable() {
  // delete all table's row/child
  while (table.hasChildNodes()) {
    table.removeChild(table.firstChild);
  }
  for (var i = 0; i < garage.length; i++) {
    table.innerHTML +=
      "<tr><td>" +
      garage[i].model +
      "</td><td>" +
      garage[i].company +
      "</td><td>" +
      garage[i].speed +
      "</td><td>" +
      decideAvailableOrNot(i) +
      "</td><td>" +
      renderButtons(i) +
      "</td></tr>";
  }
}

renderTable();

function addCar() {
  var newCar = {
    model: document.getElementById("name").value,
    company: document.getElementById("constructor").value,
    speed: document.getElementById("speed").value
  };
  garage.push(newCar);
  resetCar();
  renderTable();
}

function deleteCar(x) {
  var garageAux = [];
  for(var i = 0; i < garage.length; i++) {
    if(i !== x){
      garageAux.push(garage[i]);
    }
  }
  garage = garageAux;
  renderTable();
}

function verifCar() {
  if (document.getElementById("name").value === "") {
    alert("Add name!");
  } else {
    if (document.getElementById("constructor").value === "") {
      alert("Add company name!");
    } else {
      if (document.getElementById("speed").value === "") {
        alert("Add speed!");
      } else {
        addCar();
      }
    }
  }
}

function resetCar() {
  document.getElementById("name").value = "";
  document.getElementById("constructor").value = "";
  document.getElementById("speed").value = "";
}

function renderAvailablityButton(x) {
  if (garage[x].isAvailable) {
    return (
      '<button onclick="makeUnavailable(' + x + ')">Make unavailable</button>'
    );
  } else {
    return '<button onclick="makeAvailable(' + x + ')">Make available</button>';
  }
}

function renderDeleteButton(x) {
  return '<button onclick="deleteCar(' + x + ')">Delete</button>';
}

function renderButtons(x) {
  return renderAvailablityButton(x) + renderDeleteButton(x);
}
