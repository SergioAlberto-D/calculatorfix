console.log('Calculadora');
function Valores() {
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    return {n1:num1, n2:num2};
}
/*
    Funcion Sumar
 */
document.getElementById('btn_suma').addEventListener('click', sumar);
function sumar() {
    let valores = Valores();

    let rel = valores.n1 + valores.n2
    document.getElementById('resultado').innerHTML = "FL el resultado es: " + rel;
}

/*
    Funcion Multiplicar
 */
document.getElementById('btn_multiplica').addEventListener('click', multiplicar);
function multiplicar() {
    let valores = Valores();

    let rel = valores.n1 * valores.n2;
    document.getElementById('resultado').innerHTML = "FL el resultado es: " + rel;
}
/*
    Funcion Dividir
*/
document.getElementById('btn_division').addEventListener('click', dividir);
function dividir() {
    let valores = Valores();
    let rel = valores.n1 / valores.n2;
    document.getElementById('resultado').innerHTML = "FL el resultado es: " + rel;
}
/*
    Funcion Exponencial
 */
document.getElementById('btn_exponente').addEventListener('click', exponente);
function exponente() {
    let valores = Valores();

    let rel = Math.pow(valores.n1,valores.n2);
    document.getElementById('resultado').innerHTML = "FL el resultado es: " + rel;
}