// CHALLENGE `sayGoodbye`
function sayGoodbye(name) {
    return `Adiós, ${name}. Que tengas un buen día!`;
}

console.log(sayGoodbye ('Andy'));

// CHALLENGE `temperatureInC`
// Profe, los valores de la letra del ejercicio no coinciden con los valores reales al hacer los cálculos, 
// espero que solo sean como ejemplo y la function esté bien. O tal vez entendí mal lo que habia que hacer?
function temperatureInC(temperature, unit) {
    let convertedTemperature;
    
    if (unit === 'F') {
      convertedTemperature = (temperature - 32) * 5 / 9;
      return `${Math.round(convertedTemperature)}C`;
    } else if (unit === 'C') {
      convertedTemperature = (temperature * 9 / 5) + 32;
      return `${Math.round(convertedTemperature)}F`;
    }
}

console.log(temperatureInC(88, 'F'));
console.log(temperatureInC(24, 'C'));

// Challenge `makePersonObject`
function makePersonObject(id, name, email) {
  return {
    id: id,
    name: name,
    email: email,
  };
}

const person = makePersonObject(1, 'Alguien', 'alguien@alguien.com');
console.log(person);

// Challenge `getName`
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

const person = makePersonObject(1, 'Alguien', 'alguien@alguien.com');
console.log(person);
console.log(getName(person));