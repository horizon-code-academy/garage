var v1 = { model: "508", company: "Peugeot", speed: 220 };
var v2 = { model: "A4", company: "AUDI", speed: 280 };
var v3 = { model: "316i", company: "BMW", speed: 280 };
var v4 = { model: "Clio", company: "Renault", speed: 190 };

var garage = [v1, v2, v3, v4];

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
  if(x) {
    return "Disponible"
  } else {
    return "Indisponible"
  } 
}

var table = document.getElementById("table").getElementsByTagName("tbody")[0];

function renderTable() {
  // delete all table's row/child
  while (table.hasChildNodes()) {
    table.removeChild(table.firstChild);
  }
    for(var i = 0; i < garage.length - 1; i++) {
      table.innerHTML += '<tr><td>' + garage[i].model + '</td><td>' + garage[i].company + '</td><td>' + garage[i].speed + '</td><td>' + decideAvailableOrNot(garage[i].isAvailable) + '</td><td><button onclick="makeAvailable(' + i + ')">Make available</button></td></tr>';
    }
  }

renderTable();
