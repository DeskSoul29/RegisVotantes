var select = document.getElementById("lugarvotacion2");
select.addEventListener("change", function () {
  var selectedOption = this.options[select.selectedIndex];
  if (selectedOption.value == "Seleccione") {
    alert("Elija un lugar de votación para inscribirlo");
  } else {
    document
      .getElementById("lugarvotacion")
      .setAttribute("value", selectedOption.value);
  }
});

function submitForm(event) {
  if (document.getElementById("lugarvotacion2").value == "Seleccione") {
    alert("Elija un lugar de votación para inscribirlo");
    event.preventDefault();
    //window.history.back();
  }
}

function env() {
  alert("hol");
  const usuario = "angeles901";
  const password = "rSVYBdWfXjfomqLc";
  const dbName = "registraduria";
  var mongoose = require("mongoose");
  //Query parameter is used to search the collection.
  var query = { cedula: document.getElementById("cedula").value };
  alert(document.getElementById("cedula").value);
  //And When the query matches the data in the DB , "data" parameter is used to update the value.
  var data = { lugarvotacion: document.getElementById("lugarvotacion2").value };
  alert(document.getElementById("lugarvotacion2").value);
  //Accessing the collection using nodejs
  mongoose
    .collection("ciudadanos")
    .updateOne(query, data, (err, collection) => {
      if (err) throw err;
      console.log("Record updated successfully");
      console.log(collection);
    });
}
