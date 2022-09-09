const inputCalc = document.querySelector('.count');
const resultCalc = document.querySelector('.result'); 

function input(i) {
    inputCalc.value = inputCalc.value + i;
}

function result() {
    if (eval(inputCalc.value) == undefined && Infinity){
        resultCalc.value = '0';
        inputCalc.value = '0';
    }
    resultCalc.value = eval(inputCalc.value);
    // inputCalc.value = eval(inputCalc.value);
}
function reset() {
    resultCalc.value = '';
    inputCalc.value = '';
}