function displaynum(n1){
    Calculator.text1.value=Calculator.text1.value+n1;
}
function back(){
    let resultado1 = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado1.substring(0,resultado1.length - 1)
}