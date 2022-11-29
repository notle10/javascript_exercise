// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  showModal();
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  hideModal();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    hideModal();
  }
};

// Gathers the information which the user is inserint and collects them
const addData = () => {
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const appDate = document.getElementById("firstdate").value;


//returns an alert if the inputs are empty, adds the information with a new table row if they are provided and cleans the inputs after being added and closes the modal
  
  if (!validateAppointmentData([firstname, lastname, appDate])) {
    alert("Please enter something first!");
  } else {
    addNewTableRow(firstname, lastname, appDate);
    cleanInputs(["firstname", "lastname", "firstdate"]);
    hideModal();
  }
};

// Cleans the inputs after being saved and the modal is closed
const cleanInputs = (inputIds) => {
  for (let i = 0; i < inputIds.length; i++) {
    document.getElementById(inputIds[i]).value = "";
  }
};

//hides the modal
const hideModal = () => {
  modal.style.display = "none";
};


//shows the modal
const showModal = () => {
  modal.style.display = "block";
};

// adds a new table row with the information provided from the user
const addNewTableRow = (x, y, z) => {
  let newRow = "";
  newRow = "<tr><td>" + x + "</td><td>" + y + "</td><td>" + z + "</td></tr>";

  document.getElementById("result").innerHTML += newRow;
};


//checks if the inputs from the modal are empty
const isInputEmpty = (value) => {
  return value == "" ? true : false;
};


//validates if the inputs are empty and returns a true or false
const validateAppointmentData = (data) => {
  for (let i = 0; i < data.length; i++) {
    if (isInputEmpty(data[i])) {
      return false;
    }
  }

  return true;
};
