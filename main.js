console.log('TempConversion')

const inputField = document.getElementById('tempInput');
const fahrRadio = document.getElementById('exampleRadios1');
const celsRadio = document.getElementById('exampleRadios2');
const convertBtn = document.getElementById('convert-but');
const resetBtn = document.getElementById('resetTempInput');
const tempResult = document.getElementById('results');

// print to dom
const printToDom = (divId, textToPrint) => {
    const divContainer = document.getElementById(divId);
    divContainer.innerHTML = textToPrint;
}

// To Fahrenheit
const toFahr = () => {
    const celsiusTemp = tempInput.value;
    const convertCtoF = (celsiusTemp * 9/5) + 32;
    const fOutcome = convertCtoF.toFixed();
    printToDom('results', fOutcome +'\xB0F');
    if (fOutcome > 90+ '\xB0F') {
      tempResult.style.color = 'red';
    } else if (fOutcome < 32+'\xB0F'){
      tempResult.style.color = 'blue';
      } else{
        tempResult.style.color = 'green'
      }
    };

// To Celsius
const toCels = () => {
    const fahrenheitTemp = tempInput.value;
    const convertFtoC = (fahrenheitTemp - 32) * 5/9 ;
    const cOutcome = convertFtoC.toFixed();
    printToDom('results', cOutcome +'\xB0C');
    if (cOutcome < 0+ '\xB0C') {
      tempResult.style.color = 'blue';
    } else if (cOutcome > 32+ '\xB0C'){
      tempResult.style.color = 'red';
    } else {
      tempResult.style.color = 'green';
    }
  };

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
    e.preventDefault();
    if(exampleRadios1.checked === true){
      inputField.focus();
      toCels();
    } else {
      (exampleRadios2.checked === true)
      inputField.focus();
      toFahr();
      }
    };
  
  // Keyup Function needs revising
  inputField.addEventListener('keyup',(e) => {
    if(e.keyCode === 13){
      determineConverter();
    }
  });
  
  // add event listeners to Radio Btns
  document.getElementById('exampleRadios1').addEventListener('click', (e)=> {
  });
  document.getElementById('exampleRadios2').addEventListener('click', (e)=> {
  });
  
  // Clears value fields
  document.getElementById('resetTempInput').addEventListener('click', (e) => {
    tempInput.value = '';
    results.innerHTML = '';
    exampleRadios1.checked = false;
    exampleRadios2.checked = false;
  });
  
  // Starts App
  const init = () =>{
    convertBtn.addEventListener("click", determineConverter);
    inputField.focus();
    inputField.style.background = 'lightgrey';
  };
  init();