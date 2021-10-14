
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

  var storedValue = localStorage.getItem(key);

  if (storedValue)
      input.value = storedValue;

  input.addEventListener('input', function ()
  {
      localStorage.setItem(key, input.value);
  });
}

var firstName = $('#firstName').val();
var mail = $('#mail').val();
localStorage.setItem("firstName", firstName);
localStorage.setItem("mail", mail);