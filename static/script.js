
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
