$(document).ready(function() {
    $('#swap-btn').on('click', swapConv);
    $('#convert').on('click', convert);
});

let toCelsius = true;

function swapConv() {
    if (toCelsius) {
        // Define a conversão como de °F para °C
        $('#mode').html('<span class="mode-content">°F para °C</span>');
        toCelsius = false;
    } else {
        // Define a conversão como de °C para °F
        $('#mode').html('<span class="mode-content">°C para °F</span>');
        toCelsius = true;
    }
}

function convert() {
    let inputvalue = $('#input-val').val();
    let result;

    inputvalue == '' ? inputvalue = 0 : inputvalue = inputvalue;

    if (toCelsius) {
        // Faz a conversão de °C para °F e limita o resultado pra duas casas decimais
        result = Math.round((inputvalue * 1.8 + 32) * 100) / 100;
        $('#result').html('<span class="result-content">' + inputvalue + '°C = ' + result + '°F</span>');
    } else { 
        // Faz a conversão de °F para °C e ""   ""   ""
        result = Math.round(((inputvalue - 32) / 1.8) * 100) / 100;
        $('#result').html('<span class="result-content">' + inputvalue + '°F = ' + result + '°C</span>') ;
    }
}
