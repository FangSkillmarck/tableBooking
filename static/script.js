
var submitForm = function () {
    document.getElementById('infoForm').submit();
};

var resetForm = function () {
    document.getElementById('infoForm').reset();
};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit').addEventListener('click', submitForm);
    document.getElementById('reset').addEventListener('click', resetForm);
});

function persistInput(input)
{
  var key = "input-" + input.id;
  var storedValue =  JSON.parse(localStorage.getItem(key));
  if (storedValue)
      input.value = storedValue;
  input.addEventListener('input', function ()
  {
      localStorage.setItem(key, input.value);
  });
}

const displayAlert = message => {
    alertBox.innerText = message;
    alertBox.style.display = "block";
    setTimeout(function() {
      alertBox.style.display = "none";
    }, 3000);
  };
  

const formId = "infoForm";
//const url = location.href; //  href for the page
//const formIdentifier = `${url} ${formId}`; // Identifier used to identify the form
const alertBox = document.querySelector(".alert"); // select alert display div
let form = document.querySelector(`#${formId}`); // select form
let formElements = form.elements; // get the elements in the form

const populateForm = () => {
    for (const element of formElements) {
        var inputElement = document.getElementById(element.id);
        persistInput(inputElement);
};

document.onload = populateForm();

// /**
//  * This function gets the values in the form
//  * and returns them as an object with the
//  * [formIdentifier] as the object key
//  * @returns {Object}
//  */
//  const getFormData = () => {
//     let data = { [formIdentifier]: {} };
//     for (const element of formElements) {
//       if (element.name.length > 0) {
//         data[formIdentifier][element.name] = element.value;
//       }
//     }
//     return data;
//   };
  
//   const populateForm = () => {
//     if (localStorage.key(formIdentifier)) {
//       const savedData = JSON.parse(localStorage.getItem(formIdentifier)); // get and parse the saved data from localStorage
//       for (const element of formElements) {
//         if (element.name in savedData) {
//           element.value = savedData[element.name];
//         }
//       }
//     }
//   };
  
// var inputElement = document.getElementById("name");
// persistInput(inputElement);

// var firstName = $('#firstName').val();
// var mail = $('#mail').val();
// localStorage.setItem("firstName", firstName);
// localStorage.setItem("mail", mail)