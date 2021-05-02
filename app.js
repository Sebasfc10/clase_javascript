//interaciones: alert promt, confirm

//alert (ventana modal)
/*
alert('hola mundo');


//promt
let nombre_capturado = prompt('Ingrese su nombre : ');
alert(nombre_capturado);
*/

//confirm
/*
let nombre_capturado = 'te gusta el helado?'
let gg = confirm(nombre_capturado);
console.log(gg);
*/
//conversion de tipo
//toString - CONVERTIR EN STRING
/*
let valor = true;
console.log(valor);
console.log(typeof valor)


valor = String(valor);
console.log(valor);
console.log(typeof valor)
*/


//CONVERTIR A NUMERO

//alert('6' /  '2');
/*
let cadena = 'hi';
let num_cad = Number(cadena);
console.log(Number(true))
*/

//CONVERTIR A BOOLEANO
//console.log(Boolean(' '));
/*
let edad = 12
let resultado = edad >= 18 ? `es mayor de edad` : `es menor de edad`;
console.log(resultado);
*/
/*
let i = 10;
while(i >0){
    console.log(`el valor de i es : ${i}`)
    i--;
}
*/
console.log('++++++++ etiquetas ++++++++++')
pto: for(i=0 ; i <=10 ; i++){
    for(j=0 ;j<=10 ; j++){
        console.log(`la suma de i+j es ${i+j}`)
        if(j == 2) break pto;
    }
}

console.log('salio');









































