// console.log('Hola')

// // Palabras reservadas
// // var-const- break- typeof(me dice que es un sting)-

// let  alerta = prompt('ingrese dato');
// let alerta2 = 'el dato ingresado es' + '' + alerta
// let= alert(alerta2)

// // Operadores logicos: =, == ,===, > ,< ,=> ,!, !=, !==, 
// // Clase 05/06
// if(true){
// console.log('Hola comision')

// }
// if(false){ //dato harcodiado --> 
// console.log('Hola comision 1')

// }






// console.log(menu)




// switch{

// }



// console.log('hola comision')


// if(numero = 3){
//     console.log('hola comision')
//     console.log('hola comision')
// }

// comparaciones logicas && (y) || (o)
// Ejecitaciones
// let nombreingresado = prompt("ingresar nombre");
// if((nombreingresa)) {}

let numero = prompt("ingrese numero");

if (numero > 1000) {
    console.log('el numero es mayor a 1000');
}

let texto = prompt('ingrese un texto:')

if (texto === 'hola') {
    console.log('el texto ingresado es hola')
}

let numeroPromt2 = prompt('ingresar otro numero')

if (numeroPromt2 >= 10 && numeroPromt2 <= 50) {
    console.log('el numero esta entre 10 y 50')

}

// if(nombredeusuario === ""){
//     alert("no ingresaste el nombre");
// } else{
//     alert("el nombre ingresado es" + nombred3usuario)
// }

// Iteración For
// for(contador = 9; contador < 10; contador ++){  
//     alert(contador)
// }

let ingresarnumero = (prompt('ingresar numero'));
 
for(let i = 1; i <= 10; i++){
    let resultado = ingresarnumero +1;
    alert(ingresarnumero + 'X' + i + '_' + resultado)
}



//Entrega
// let menu = () => {
//     let op = prompt("Seleccione uan opcion: \n 1. Productos \n 2 consulta");
//     if (op == consulta) {
//         alert()
//     }
// }

// let bienvenida = () => {
//     let nombre = prompt("Ingrese su nombre: ");
//     let edad = prompt('Ingrese su edad: ');
//     if (edad >= 18) {
//         alert("!Bienvenido " + nombre);
//         /*llamada a la accion */
//         menu()
//     } else {
//         alert('Usted es menor de edad');
//     }
// }

//     bienvenida();
