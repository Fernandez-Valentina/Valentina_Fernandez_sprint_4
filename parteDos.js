const characters = [
    {
        name: "Harry Potter",
        height: "172",
        mass: "102",
        eye_color: "green",
        gender: "male"
    },
    {
        name: "Hermione Granger",
        height: "165",
        mass: "55",
        eye_color: "brown",
        gender: "female"
    },
    {
        name: "Ron Weasley",
        height: "210",
        mass: "82",
        eye_color: "blue",
        gender: "male"
    },
    {
        name: "Luna Lovegood",
        height: "157",
        mass: "48",
        eye_color: "blue",
        gender: "female"
    },
];

// // // // 1 Obtener caracteres con masa superior a 100
const massGreaterThan100 = characters.filter((c) => c.mass > 100);
console.log(massGreaterThan100);

// // // 2 Obtener personajes con altura inferior a 200
const heightLessThan200 = characters.filter((c) => c.height < 200);
console.log(heightLessThan200);

// // 3 Obtener una matriz con todos los nombres
const names = characters.map((c) => c.name);
console.log(names);

// // 4 Obtener un array de objetos con sólo las propiedades nombre y altura
const namesAndHeights = characters.map((c) => ({name: c.name, height: c.height}));
console.log(namesAndHeights);

// 5 Encontrar el primer personaje con ojos marrones.
const firstBrownEyes = characters.find((c) => c.eye_color === 'brown');
console.log(firstBrownEyes);

// 6 Obtener todos los personajes masculinos
const maleCharacters = characters.filter((c) => c.gender === 'male');
console.log(maleCharacters);

// 7 Obtener todos los personajes femeninos
const femaleCharacters = characters.filter((c) => c.gender === 'female');
console.log(femaleCharacters);

// 9 Obtener una matriz con todas las alturas
const heights = characters.map((c) => c.height);
console.log(heights);

// 10 Imprimir en la consola los nombres de todos los personajes.
characters.forEach((c) => console.log(c.name));

// 11 Encontrar el primer personaje que tenga ojos de color azul y que su peso sea mayor a 80
const firstBlueEyesMassGreater80 = characters.find((c) => c.eye_color === 'blue' && c.mass > 80);
console.log(firstBlueEyesMassGreater80);

// 12 Verificar si todos los personajes con ojos azules tienen una altura mayor a 170.
const allBlueEyesTaller170 = characters
.filter((c) => c.eye_color === 'blue')
.every((c) => c.height > 170);
console.log(allBlueEyesTaller170);

// Con el proyecto y por temas de trabajo externos me he atrasado un poco con las clases,
//he aprovechando el fin de semana para verlas de nuevo y ponerme al día. 
//Intenté cumplir con las consignas de los ejercicios espero que estén bien,
//aguardo las correcciones. Muchas gracias por todo!