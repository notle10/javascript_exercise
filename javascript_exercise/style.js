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

const addData = () => {
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const appDate = document.getElementById("firstdate").value;

  if (!validateAppointmentData([firstname, lastname, appDate])) {
    alert("Please enter something first!");
  } else {
    addNewTableRow(firstname, lastname, appDate);
    cleanInputs(["firstname", "lastname", "firstdate"]);
    hideModal();
  }
};

const cleanInputs = (inputIds) => {
  for (let i = 0; i < inputIds.length; i++) {
    document.getElementById(inputIds[i]).value = "";
  }
};

const hideModal = () => {
  modal.style.display = "none";
};

const showModal = () => {
  modal.style.display = "block";
};

const addNewTableRow = (x, y, z) => {
  let newRow = "";
  newRow = "<tr><td>" + x + "</td><td>" + y + "</td><td>" + z + "</td></tr>";

  document.getElementById("result").innerHTML += newRow;
};

const isInputEmpty = (value) => {
  return value == "" ? true : false;
};

const validateAppointmentData = (data) => {
  for (let i = 0; i < data.length; i++) {
    if (isInputEmpty(data[i])) {
      return false;
    }
  }

  return true;
};
