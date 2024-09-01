//CHALLENGE `sayGoodbye`
const DEFAULT_NAME = 'Andy'
function sayGoodbye(name) {
    return `Adiós, ${name}. Que tengas un buen día!`;
}

console.log(sayGoodbye (DEFAULT_NAME));

// CHALLENGE `temperatureInC`
// Profe, los valores de la letra del ejercicio creo que no coinciden con los valores reales al hacer los cálculos, 
// espero que solo sean como ejemplo y la function esté bien. O tal vez entendí mal lo que había que hacer.
function temperatureInC(temperature, unit) {
    let convertedTemperature;
    
    if (unit === 'F') {
      convertedTemperature = (temperature - 32) * 5 / 9; // Convierte de Fahrenheit a Celsius
      return `${Math.round(convertedTemperature)}C`;
    } else if (unit === 'C') {
      convertedTemperature = (temperature * 9 / 5) + 32; // Convierte de Celsius a Fahrenheit
      return `${Math.round(convertedTemperature)}F`; // Redondea al entero mas cercano
    }
}

console.log(temperatureInC(88, 'F'));
console.log(temperatureInC(24, 'C'));

//Challenge `makePersonObject`
function makePersonObject(id, name, email) {
  return {
    id: id,
    name: name,
    email: email,
  };
}

const person = makePersonObject(1, 'Alguien', 'alguien@alguien.com');
console.log(person);

//Challenge `getName`
function makePersonObject(id, name, email) {
  return {
    id: id,
    name: name,
    email: email,
  };
}
function getName(object) {
  return `Hola, mi nombre es ${object.name}`;
}

const personForGetName = makePersonObject(1, 'Alguien', 'alguien@alguien.com'); 
console.log(getName(personForGetName));

//Challenge `appleIndex`
function appleIndex(fruitArray) {
  return fruitArray.indexOf('manzana');
}

const FRUITS_APPLEINDEX = ['naranja', 'uva', 'manzana', 'plátano', 'mango'];
console.log(appleIndex(FRUITS_APPLEINDEX));

//Challenge `isItAnApple`
function isItAnApple(fruitList) {
  return fruitList.map(element => element === 'apple');
}

const FRUITS_LIST = ['orange', 'apple', 'banana', 'apples', 'apple', 'mango'];
console.log(isItAnApple(FRUITS_LIST));