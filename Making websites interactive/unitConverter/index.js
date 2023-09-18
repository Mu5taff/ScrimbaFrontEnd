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
    removeDisplayText("converted-values-card");
    
    //Generates the conversions
    const numValue = Number(valueEl.value);
    let containerEl = document.getElementById("converted-values")
    const Length = new unit("Length", 3.281, "Meters", "Feet")
    const Volume = new unit("Volume", 0.264, "Liters", "Gallons")
    const Mass = new unit("Mass", 2.204, "Kilos", "Pounds")
    const renderableUnits = [Length, Volume, Mass]
    renderConversion (containerEl, renderableUnits, numValue)
    }
})

function renderConversion(div, arr, value){
    for(i = 0; i < arr.length; i++ ){
        div.innerHTML += `<div class="converted-values-card">
                            <h2 class="converted-values-title">
                                ${arr[i].name} (${arr[i].metricUnit}/${arr[i].imperialUnit})
                            </h2>
                            <p class="converted-values-results">
                                ${value} ${arr[i].metricUnit} = ${(value*arr[i].metricToImperialConversion).toFixed(3)} ${arr[i].imperialUnit} | ${value} ${arr[i].imperialUnit} = ${(value/arr[i].metricToImperialConversion).toFixed(3)} ${arr[i].metricUnit}
                            </p>
                          </div>`              
    }
}

function unit(name, metricToImperialConversion, metricUnit, imperialUnit)  {
    this.name = name;
    this.metricToImperialConversion = metricToImperialConversion;
    this.metricUnit = metricUnit
    this.imperialUnit = imperialUnit
}

function removeDisplayText(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].remove();
    }
}