// 4. Estructuras de control

// 1. Usa un if para verificar si una variable nota es mayor o igual a 60.
// Muestra "Aprobado" o "Reprobado".

// let nota = 60;

// if(nota >= 60){
//    console.log('Aprobado');
// }else{
//    console.log('Reprobado'); 
// }

// 2. Escribe una función que reciba un número y devuelva "fizz" si es divisible por 3, "buzz" si por 5, o "fizzbuzz" si por ambos.


// function fizzBuzz(num) {
//     switch (true) {
//         case num % 3 == 0 && num % 5 == 0:
//             console.log('fizzbuzz');
//             break;
//         case num % 3 == 0:
//             console.log('fizz');
//             break; 
//         case num % 5 == 0:
//             console.log('buzz');
//             break;    
    
//         default:
//             console.log(num);
//             break;
//     }

// }
 
// fizzBuzz(3);  
// fizzBuzz(5);  
// fizzBuzz(15); 
// fizzBuzz(7); 


// 3. Declara una variable rol = "admin" y usa un switch para imprimir distintos mensajes según sea "admin", "user", "guest".

// let rol = 'admin';

// switch (rol) {
//     case 'admin':
//         console.log('Eres admin');
        
//         break;
//     case 'user':
//         console.log('Eres user');
            
//         break;
//     case 'guest':
//         console.log('Eres guest');
                
//         break;

//     default:
//         console.log('No eres admin, ni user y ni guest');
//         break;
// }

// 4. Usa un for para imprimir los números del 1 al 10.

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// 5. Crea una función que reciba un array de edades y use un for para contar cuántas son mayores de edad (>= 18).

// const arrEdades = [13, 45, 70, 18, 5];

// function MayorEdad(arr){
//     let contador = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] >= 18) contador++
//     }
//     return contador;
// }

// console.log(MayorEdad(arrEdades));

