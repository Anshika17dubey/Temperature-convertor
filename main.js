const celciusInput = document.querySelector('#celcius > input')
const fahrenheitInput = document.querySelector('#fahrenheit > input')
const kelvinInput = document.querySelector('#kelvin > input')

const roundToTwoDecimal = (num) =>{
    return num.toFixed(2);
}


const celciusToFandK =() =>{
    const celciusTemp = parseFloat(celciusInput.value);
    const fahrenheitTemp = (celciusTemp*1.8)+32;
    const kelvinTemp = celciusTemp+273.15;

    fahrenheitInput.value = roundToTwoDecimal(fahrenheitTemp);
    kelvinInput.value = roundToTwoDecimal(kelvinTemp); 
};

const fahrenheitToCandK =() =>{
    const fahrenheitTemp = parseFloat(fahrenheitInput.value);
    const celciusTemp = (fahrenheitTemp-32)*(5/9);
    const kelvinTemp = (fahrenheitTemp + 459.67)*(5/9);

    celciusInput.value = roundToTwoDecimal(celciusTemp);
    kelvinInput.value = roundToTwoDecimal(kelvinTemp); 
};

const kelvinToCandF =() =>{
    const kelvinTemp = parseFloat(kelvinInput.value);
    const celciusTemp = kelvinTemp-273;
    const fahrenheitTemp = 1.8 * (kelvinTemp-273)+32;

    celciusInput.value = roundToTwoDecimal(celciusTemp);
    fahrenheitInput.value = roundToTwoDecimal(fahrenheitTemp); 
};

const main = () =>{
    celciusInput.addEventListener('input',celciusToFandK);
    fahrenheitInput.addEventListener('input', fahrenheitToCandK);
    kelvinInput.addEventListener('input', kelvinToCandF);
};

main();




