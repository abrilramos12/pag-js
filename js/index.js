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






// console.log(menu);




// switch{

// }



// console.log('hola comision');


// if(numero = 3){
//     console.log('hola comision');
//     console.log('hola comision');
// }

// comparaciones logicas && (y) || (o)
// Ejecitaciones
// let nombreingresado = prompt("ingresar nombre");
// if((nombreingresa)) {}

// let numero = prompt("ingrese numero");

// if (numero > 1000) {
//     console.log('el numero es mayor a 1000');
// }

// let texto = prompt('ingrese un texto:')

// if (texto === 'hola') {
//     console.log('el texto ingresado es hola')
// }

// let numeroPromt2 = prompt('ingresar otro numero')

// if (numeroPromt2 >= 10 && numeroPromt2 <= 50) {
//     console.log('el numero esta entre 10 y 50')

// }

// if(nombredeusuario === ""){
//     alert("no ingresaste el nombre");
// } else{
//     alert("el nombre ingresado es" + nombred3usuario)
// }

// Iteración For
// for(contador = 9; contador < 10; contador ++){  
//     alert(contador)
// }

// let ingresarnumero = (prompt('ingresar numero'));

// for(let i = 1; i <= 10; i++){
//     let resultado = ingresarnumero +1;
//     alert(ingresarnumero + 'X' + i + '_' + resultado)
// }

// While --> mientras se cumpla una condicion

// let entrada = prompt('ingresar algun dato:');
// while(entrada !== 'ESC'){
//     alert('el usuario ingreso' + entrada);
//     entrada = prompt('ingreso otro dato');
// }
//Do while --> mientras que

// let repetir = false

// do{
// console.log('solo una vez');
// }while(repetir);

// let contador = 1

// do{

//     console.log('mientras contador sea menor que 10')
//     contador+=2
// }while(contador < 10)

// let numero= 0

// do{
//     numero = prompt('ingresar numero');
//     console.log(numero);
// }while (parseInt(numero)) 

// Switch --> es para multiple condiciones
// let numero = 8
// switch (numero) {
//     case 1: //si lo que tengo aca el valor es igual al de arriba

//         console.log('es el numero uno');
//         break;

//     default:
//         break;
//     case 2: //si lo que tengo aca el valor es igual al de arriba

//         console.log('es el numero uno');
//         break;
//     default:
//         break;

//         case 3: //si lo que tengo aca el valor es igual al de arriba
//         console.log('es el numero uno');

//         break;
//     default:
//         break;
//     case 4: //si lo que tengo aca el valor es igual al de arriba
//         console.log('es el numero uno');
//         break;

//     default:
//         break;
//     case 5: //si lo que tengo aca el valor es igual al de arriba
//         console.log('es el numero uno');
//         break;

//     default:
//         break;
//     case 6: //si lo que tengo aca el valor es igual al de arriba
//         console.log('es el numero uno');
//         break;

//     default:
//         break;

// }
//entrega
// let entrada = prompt('ingresar nombre');

// while (entrada != ESC) {
//     switch (entrada) {
//         case 'Ana':
//             alert('Hola ana');
//             break;

//         case 'agus':
//             alert('Hola agus');
//             break;
//         case 'Abril':
//             alert('Hola abril'); 
//             break;
//         default:
//             alert('quien sos');
//             break;
//     }
//     entrada = prompt('ingresar otro nombre')
// }

//Entrega
// let menu = () => {
//     let op = prompt("Seleccione uan opcion: \n 1. Productos \n 2 consulta");
//     if (op == consulta) {
//         alert();
//     }
// }

// let bienvenida = () => {
//     let nombre = prompt("Ingrese su nombre: ");
//     let edad = prompt('Ingrese su edad: ');
//     if (edad >= 18) {
//         alert("!Bienvenido " + nombre);
//         /*llamada a la accion */
//         menu();
//     } else { 
//         alert('Usted es menor de edad'); 
//     }
// }


// bienvenida();
// menu()

// OBJETOS(14 DE JUNIO)

// let nombre = 'Abril';
// let apellido = 'Ramos';
// let edad = 31;



// const persona = [
//     nombre: 'Homero',
//     apellido: 'Simpsoms',
//     edad:35,
//     emai : 'homero@gmail.com',
//     esMayorEdad: true


// ]

// console.log(persona.nombre, persona.esMayorEdad);
// console.log(persona.email);
// console.log(persona['nombre']), persona (['email']);

// // Asignando un nuevo nombre 

// persona  ['nombre'] = marge;
// edad ['edad'] = 40;

// console.log(persona.nombre, persona.edad);
// // this --> 'este' es un objeto hace referencia al objeto que esta ejecutando 
// function Persona(nombre,apellido,edad){
//     this.nombre = nombre;
//     this.apellido = apellido; 
//     this.edad = edad;

// }
// const persona3 = new Persona('Guada', 'Perez',25);
// const persona4 = new Persona ('Rosie', 'Ramson', 55);
// for(let i = 0; i< 3; i++){
//     const nombre = prompt('ingresar el nombre ')
//     const apellido = prompt('ingresar el nombre ')
//     const edad = prompt('ingresar el nombre ')
// }

// const nombre = prompt('ingresar el nombre ');
// const apellido = prompt('ingresar el apellido ');
// const email = prompt('ingresar el email ');
// const persona5 = new Persona(nombre,apellido,email)

// console.log(persona5);
// const persona5 = new Persona()

// console.log(persona3);
// console.log(persona4);

// const saludar = ()=>{
//     return 'Hola ¿como estas?'
// }
// console.log(saludar());

// // Metodos
// let texto = 'hola';
// console.log(texto.length); //length es un metodo
// console.log(texto.toLowerCase());
// //  un metodo es una funcion de algun objeto
// function Persona(nombre,apellido,edad){
//     this.nombre = nombre;
//     this.apellido = apellido; 
//     this.edad = edad;
//     this.hablar = function(){return 'hola soy' + this.nombre}
//     this.getFullName = function() {return this.name + ' ' + this.apellido }
// }

// const persona1 = new Persona ('Guada','lo más', 35);
// const persona2 = new Persona('Pablo', 'lo más',37);
// const persona3 = new Persona('Abril', 'lo más', 24);

// console.log(persona1.hablar());
// console.log(persona2.hablar());
// console.log(persona3.getFullName());
 
// Operacion in y for in 

// function Persona(nombre,apellido,edad){
//         this.nombre = nombre;
//         this.apellido = apellido; 
//         this.edad = edad;
//         this.fechaNacimiento= '08/12/1958'
//         this.hablar = function(){return 'hola soy' + this.nombre}
//         this.getFullName = function() {return this.name + ' ' + this.apellido }
//     }

//  console.log('nombre' in persona1); //pregunta si nombre esta en persona1

// const persona = Persona ('Guada', 'el mejor', 25)
//  for(const propiedad in persona1){
//     console.log(propiedad);
//     console.log('valer:', persona(propiedad));
//  }


  //   Clase Array
// const arrayA = [1,2,'C3', 'Abril', true,{nombre:'Guada'}];
// console.log(arrayA);

// // Array con objetos
// // Object.nombre --> obj['nombre'];
// console.log(arrayA[2] + numero [4]);
// console.log(arrayA[3]);
// const numeros= [1,2,3,4,5,6,7,8,9,10]

// for (let index = 0; index<6; index ++){
//   alert(numeros[index]);
 
// }

//metodos
// const miArray = ['Abril',1,10];
// console.log(miArray.length);
// console.log(miArray[miArray.lenght -1]);
// length --> sirve para que devuelva el tamaño de nuestro array 
// 


// tamaño del array --> ultima posicion 
//Tamaño = 6 entonces la ultima posición es tamaño -1
// Funciones de orden superior I



// DOM
// Modelos de objeto de documento
// objeto --> JS

// Eventos


// clase del dia 12/07
// let permiso

// if (usuario.edad =< ) {
    
// } else {
    
// }

// // clase dia 17/07

// const nombre = ['juan','carla','cande','pablo', 'ana','luis'];
// console.log(nombre);
// console.log(...nombre);

// const usuario1 = {
//   nombre: 'Fede',
//   apellido: 'Martinez',
//   curso: 'JS',
//   email: 'fm@gmail.com'
// }

// const usuario2 = {
//   nombre: 'Candela',
//   apellido: 'Martinez',
//   curso: 'html',
//   email: 'cm@gmail.com'
// }

// function suma(num1,num2) {
//   console.log();

// }

// suma(2,4);

function suma(parametros) {
  console.log(parametros);
}

suma(2,4);


// Librerias




