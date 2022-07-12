// código del cuadrado
console.group("cuadrado");
function perimetroCuadrado (lado){
return lado*4;
}
function areaCuadrado (lado) {
    return lado * lado;
}
console.groupEnd();
// código del triangulo
console.group("triangulo");
function areaTriangulo(base, altura) {
    return base * altura /2;
}
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
console.groupEnd();

// código del circulo
console.group("circulo");
const Pi = Math.PI;
function areaCirculo(radio) {
    return radio**2 * Pi;
}
function perimetroCirculo (radio) {
    return 2 * radio * Pi;
}
console.groupEnd();

// aqui insertamos HTML //
function calcularPerimetroCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado (value);
    alert(perimetro);
}
function calcularAreaCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado (value);
    alert(area);
}