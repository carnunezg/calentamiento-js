// 6. Objetos

// 1. Crea un objeto persona con nombre, edad y activo. Imprime una de sus propiedades.

// const persona = {
//     nombre: 'carlos',
//     edad: 37,
//     activo: true
// }

// const keys = Object.keys(persona);
// const values = Object.values(persona);
// const entries = Object.entries(persona);

// console.log(keys);
// console.log(values);
// console.log(entries);


// 2. Desestructura el objeto anterior y muestra nombre y edad en consola.

// const persona = {
//     nombre: 'carlos',
//     edad: 37,
//     activo: true
// }

// const {activo, ...nombreYedad} = persona;

// console.log(nombreYedad);


// 3. Crea una función que reciba un objeto usuario y devuelva un string como: "Ana tiene 25 años".

// const usuario = {
//     nombre: 'Ana',
//     edad: 25
// }

// const cadena = (obj) => {
//     return `${obj.nombre} tiene ${obj.edad} años.`;
// }


// console.log(cadena(usuario));

// 4. Usa el spread operator para crear un nuevo objeto a partir de persona, pero agregando una propiedad ciudad.


// const persona = {
//     nombre: 'carlos',
//     edad: 37,
//     activo: true
// }

// const nuevoObjeto = {...persona, cuidad: 'Concepción'};

// console.log(persona);
// console.log(nuevoObjeto);


// 5. Crea un array de objetos con varias personas. Usa .map() para obtener un array con los nombres, y .filter() para los mayores de edad.

// const usuarios = [
//     {nombre: 'carlos', edad: 37},
//     {nombre: 'luis', edad: 18},
//     {nombre: 'karla', edad: 32},
//     {nombre: 'amanda', edad: 3},    
// ];

// const nombres = usuarios.map(usuario => usuario.nombre);
// const mayorEdad = usuarios.filter(usuario => usuario.edad >= 18);


// console.log(nombres);
// console.log(mayorEdad);