

var platillosDB = firebase.database().ref('platillos');

document.getElementById("formulario_derecha").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var iname = getElementVal('name');
    var iprice = getElementVal('iprice');
    var idescription = getElementVal('idescrption');
    var icategory = getElementVal('icategory');
    var iingredientes = getElementVal('iingredients');

    console.log(iname, iprice, idescription, icategory, iingredientes);
};

const getElementVal = (id) => {
return document.getElementById(id).value;
};

