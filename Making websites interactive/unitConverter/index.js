/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("converter-btn");

convertBtn.addEventListener("click", function () {
 const valueEl  = document.getElementById("converter-value");
 if(valueEl.value != "") {
    //Prevents duplicate text being generated
    removeDisplayText("converted-values-results");
    
    //Generates the conversions
    const numValue = Number(valueEl.value);
    displayLength(numValue);
    displayVolume(numValue);
    displayMass(numValue);
    }
})

function displayLength(unit){
    const lengthCnvEl= document.getElementById("length-cnv");
    const meterConversion  = feetToMeter(unit);
    const feetConversion = meterToFeet(unit);
    lengthCnvEl.innerHTML += `<p id="length-cnv" class="converted-values-results">
                                    ${unit} meters = ${feetConversion} feet | ${unit} feet = ${meterConversion} meters
                              </p>`;
}

function displayVolume(unit){
    const volumeCnvEl= document.getElementById("volume-cnv");
    const gallonConversion = literToGallon(unit);
    const literConversion = gallonToliter(unit);
    volumeCnvEl.innerHTML += `<p id="volume-cnv" class="converted-values-results">
                                    ${unit} liters = ${gallonConversion} gallons | ${unit} gallons = ${literConversion} liters
                              </p>`;
}

function displayMass(unit){
    const massCnvEl = document.getElementById("mass-cnv");
    const poundConversion = kiloToPound(unit);
    const kiloConversion = poundToKilo(unit);
    massCnvEl.innerHTML += `<p id="-cnv" class="converted-values-results">
                                    ${unit} kilos = ${poundConversion} pounds | ${unit} pounds = ${kiloConversion} kilos
                            </p>`;
}

function removeDisplayText(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].remove();
    }
}

function meterToFeet(meter){
    let feet = meter * 3.281;
    return  feet.toFixed(3);
}

function feetToMeter(feet){
    let meter = feet / 3.281;
    return meter.toFixed(3);
}

function literToGallon(liter){
    let gallon = liter * 0.264;
    return gallon.toFixed(3);
}

function gallonToliter(gallon){
    let liter = gallon / 0.264;
    return liter.toFixed(3);
}

function kiloToPound(kilo){
    let pound = kilo * 2.204;
    return pound.toFixed(3);
}

function poundToKilo(pound){
    let kilo = pound / 2.204;
    return kilo.toFixed(3);
}