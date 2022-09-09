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
function areaTriangulo (base, altura) {
    return base * altura /2;
}
function areaTriangulo1 (lado1, lado2, base, s) {    
    return (s*(s-lado1)*(s-lado2)*(s-base))**(1/2);
}
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function perimetroTrianguloIsoceles(lado, base) {
    return lado * 2 + base;
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
function agregarSeparadorMiles(numero) {
    let partesNumero = numero.toString().split('.');
    
    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return partesNumero.join('.');
}
function calcularPerimetroCuadrado () {
    const input = document.getElementById("Input_cuad");
    const valor = input.value;

    const perimetro = perimetroCuadrado (valor);
    pcuadrado.innerHTML = "El perímetro es <br>"+agregarSeparadorMiles(perimetro.toFixed(2))+" "+document.getElementById("unidades").value;
}
function calcularAreaCuadrado () {
    const input = document.getElementById("Input_cuad");
    const valor = input.value;

    const area = areaCuadrado (valor);
    acuadrado.innerHTML = "El área es <br>"+agregarSeparadorMiles(area.toFixed(2))+" "+document.getElementById("unidades").value + "<sup>2</sup>";
}


//html para calcular area y perimetro de triangulo, cuando conoces todos los lados del triangulo//
function  calcularPerimetroTriangulo() {
    const input1 = document.getElementById("Input_triang_l1").value;
    const value1 = Number(input1);
    const input2 = document.getElementById("Input_triang_l2").value;
    const value2 = Number(input2);
    const input3 = document.getElementById("Input_triang_base").value;
    const value3 = Number(input3);

    const perimetroTri = perimetroTriangulo(value1, value2, value3); 
    ptriangulo.innerHTML = "El perímetro es <br>"+agregarSeparadorMiles(perimetroTri.toFixed(2))+" "+document.getElementById("unidades_Triang").value; 
}
function calcularAreaTriangulo1 () {
    const input1 = document.getElementById("Input_triang_l1").value;
    const value1 = Number(input1);
    const input2 = document.getElementById("Input_triang_l2").value;
    const value2 = Number(input2);
    const input3 = document.getElementById("Input_triang_base").value;
    const value3 = Number(input3);
    const s = ((value1+value2+value3)/2); 

    const areaTri = areaTriangulo1 (value1, value2, value3, s);
    atriangulo.innerHTML = "El área es <br>"+agregarSeparadorMiles(areaTri.toFixed(2))+" "+document.getElementById("unidades_Triang").value + "<sup>2</sup>";
}
function calcularAlturaTriangulo1 () {
    const input1 = document.getElementById("Input_triang_l1").value;
    const value1 = Number(input1);
    const input2 = document.getElementById("Input_triang_l2").value;
    const value2 = Number(input2);
    const input3 = document.getElementById("Input_triang_base").value;
    const value3 = Number(input3);     
    const s = ((value1+value2+value3)/2); 
    const alturaTri = 2/value3 * areaTriangulo1 (value1, value2, value3, s);
    alturatriangulo.innerHTML = "La altura es <br>"+agregarSeparadorMiles(alturaTri.toFixed(2))+" "+document.getElementById("unidades_Triang").value;
}

//html para calcular area y perimetro de triangulo con base y Altura//
function  calcularPerimetroTriangulo2() {
    const input1 = document.getElementById("Input_Altura_Triang").value;
    const value1 = Number(input1);
    const input2 = document.getElementById("Input_Base_Triang").value;
    const value2 = Number(input2);
    const value3 = (value1*value1) + (value2/2)*(value2/2);
    const value4 =  value3**(1/2);
    
    const perimetroTriIso = perimetroTrianguloIsoceles(value4, value2); 
    ptriangulo1.innerHTML = "El perímetro es <br>"+agregarSeparadorMiles(perimetroTriIso.toFixed(2))+" "+document.getElementById("unidades_Triang1").value; 
}
function calcularAreaTriangulo2 () {
    const input1 = document.getElementById("Input_Altura_Triang").value;
    const value1 = Number(input1);
    const input2 = document.getElementById("Input_Base_Triang").value;
    const value2 = Number(input2);

    const areaTri = areaTriangulo (value2, value1);
    atriangulo1.innerHTML = "El área es <br>"+agregarSeparadorMiles(areaTri.toFixed(2))+" "+document.getElementById("unidades_Triang1").value + "<sup>2</sup>";
}
function calcularLadoTriangulo () {
    const input1 = document.getElementById("Input_Altura_Triang").value;
    const value1 = Number(input1);
    const input2 = document.getElementById("Input_Base_Triang").value;
    const value2 = Number(input2);

    const value3 = (value1*value1) + (value2/2)*(value2/2);
    const lado = (value3 ** (1/2));
    lado01.innerHTML = "El lado es <br>"+agregarSeparadorMiles(lado.toFixed(2))+" "+document.getElementById("unidades_Triang1").value;
}

//html para calcular area y perimetro de circulo conociendo su radio//
function  calcularPerimetroCirculo() {
    const input1 = document.getElementById("Input_Circulo").value;
    const value1 = Number(input1);
    
    
    const perimetro_Circulo = perimetroCirculo(value1); 
    pcirculo.innerHTML = "El perímetro es <br>"+agregarSeparadorMiles(perimetro_Circulo.toFixed(2))+" "+document.getElementById("unidades_Circulo").value; 
}
function calcularAreaCirculo () {
    const input1 = document.getElementById("Input_Circulo").value;
    const value1 = Number(input1);
    
    const area_Circulo = areaCirculo (value1);
    acirculo.innerHTML = "El área es <br>"+agregarSeparadorMiles(area_Circulo.toFixed(2))+" "+document.getElementById("unidades_Circulo").value + "<sup>2</sup>";
}






//function obtenerUnidad() {
    //const input = document.getElementById("unidades").value; //obtenemos el valor del ID unidades//
    //document.getElementById("undarea").innerHTML = input; // reemplazamos en valor del ID und//
    //document.getElementById("undperimetro").innerHTML = input;
// } ejemplo de function, para reemplazar datos por ID //