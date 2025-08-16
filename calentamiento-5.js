// 5. Arrays

// 1. Crea un array de 5 frutas. Muestra la primera y última usando índices.

// let frutas = ['uvas', 'pera', 'mango', 'manzana', 'melon'];

// const primerayUltima = (arr) => {
//     if(arr.length === 1){
//         return [arr[0]];
//     }
//     if(arr.length === 0){
//         return [];
//     }
//     return [arr[0], arr[arr.length - 1]];
// }

// console.log(primerayUltima(frutas));

// 2. Usa .map() para convertir un array de nombres a un array con cada nombre en mayúsculas.

// let nombres = ['carlos', 'luis', 'karla', 'amanda'];

// let nombreMayusculas = nombres.map(nombre => {
//     return nombre.toUpperCase();
// });

// console.log(nombres);
// console.log(nombreMayusculas);

// 3. Usa .filter() para obtener los números mayores a 10 de [3, 12, 7, 20, 5].

// let numeros = [3, 12, 7, 20, 5];

// let numMayores = numeros.filter(num => {
//     return num > 10;
// }); 

// console.log(numMayores);

// 4. Crea una función que reciba un array de personas (objetos con nombre y edad) y devuelva un array solo con los mayores de 18.

// const usuarios = [
//     {nombre: 'carlos', edad: 37},
//     {nombre: 'luis', edad: 18},
//     {nombre: 'karla', edad: 32},
//     {nombre: 'amanda', edad: 3},    
// ];

// const mayores = (arr) => {
//     return arr.filter(usuario => {
//         return usuario.edad >= 18;
//     });
// }

// console.log(mayores(usuarios));

// 5. Usa .find() para buscar si existe una fruta "manzana" en un array, y .includes() para saber si "banana" está en él.

// let frutas = ['pera', 'mango', 'manzana', 'banana', 'manzana'];

// let existeManzana = frutas.find(fruta => {
//     return fruta === 'manzana';
// });

// let existeBanana = frutas.includes('banana');

// console.log(existeManzana);
// console.log(existeBanana);
