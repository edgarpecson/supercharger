//START FUNCTION: caclNumber
//Convert the input from form to miles or kilometers
function calcNumber() 
{
  //Retrieve values from form box in index.html
  var getDistance = document.getElementById("convert").value;
  var getMiles = document.getElementById("miles").checked;
  var getKilom = document.getElementById("kilom").checked;

  //Determine which radio check returns 'true' for either getMiles or getKilom.  
  //Calculate unit conversion for Miles
  switch (true) {
    case getMiles:
        var result = convertMiles(getDistance);
        var resultBox = document.getElementById("resultBox");
    
    //Determine if distance entered is <> 300 miles
    (parseInt(result) < 300) ?
        resultBox.innerHTML = `${getDistance} miles is ${result} kilometers. Fully charged for driving!`
      :
        resultBox.innerHTML = `${getDistance} miles is ${result} kilometers. Not enough charge!`
    break;

    //Calculate unit conversion for Kilometers
    case getKilom:
      var result = convertKilom(getDistance);
      var resultBox = document.getElementById("resultBox");
    
    //Determine if distance entered is <> 300 miles
    (parseInt(result) < 300) ?
        resultBox.innerHTML = `${getDistance} kilometers is ${result} miles. Fully charged for driving!`
    :
        resultBox.innerHTML = `${getDistance} kilometers is ${result} miles. Not enough charge!`;
    
    break;
    default:  alert("Please select a unit of distance");
    
}
}//END FUNCTION: calcNumber



//WORKING FUNCTIONS

//FUNCTION: CLEAR THE FIELDS AND RADIO BUTTONS
function clearFields() {
  document.getElementById("convert").value = "";
  document.getElementById("convert").focus();
  document.getElementById("miles").checked = "";
  document.getElementById("kilom").checked = "";
}

//FUNCTION: CONVERT MILES TO KILOMETERS
function convertMiles(x) {
  return parseFloat(x * 1.609344).toFixed(2);
}

//FUNCTION: CONVERT KILOMETERS TO MILES
function convertKilom(x) {
  return parseFloat(x / 1.609344).toFixed(2);
}
