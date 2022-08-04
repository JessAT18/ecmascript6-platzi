//Clase 2

function newFunc(name, age, country) {
    var name = name || 'Jessica';
    var age = age || 22;
    var country = country || 'BO';
    console.log(name, age, country);
}

//es6

function newFunction(name = 'Jessica', age = 22, country = 'BO') {
    console.log(name, age, country);
}

newFunction();
newFunction('Alice', '19', 'UK');

//------------

let hello = 'Hello';
let world = 'World';

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//---------------------------------------------------------------------------
//Clase 3

let lorem = "Hola! Estoy escribiendo algo breve para poder usar como \n"
+ "ejemplo en el curso de JS"

//es6
let lorem2 = `Otro texto que tenemos que escribir
para poder ejemplificar el uso de los template literals`;

console.log(lorem);
console.log(lorem2);

//---

let person = {
    'name': 'Jessica',
    'age': 22,
    'country': 'BO'
};

console.log(person.name, person.age, person.country);

//es6

let { name, age } = person;
console.log(name, age);

//---

let team1 = ['Jessica', 'Andrea', 'Giulianne'];
let team2 = ['Nancy', 'Rosmery', 'Paola'];

let education = ['Michael', ...team1, ...team2];

console.log(education);

//---

{
    var globalVar = "GLOBAL VAR";
}

{
    let globalLet = "GLOBAL LET";
    console.log(globalLet);
}

console.log(globalVar);
//console.log(globalLet);   //Let no es accesible desde una instancia local

//---

const a = 'b';
//a = 'a';                  //Const no nos permite modificar a
console.log(a);

//---------------------------------------------------------------------------
//Clase 4

let name2 = 'Jessica';
let age2 = 22;

//es5
obj = { name: name2, age: age2 };

//es6
obj2 = { name2, age2 };

console.log(obj);
console.log(obj2);

//Arrow functions

const names = [
    {name: 'Jessica', age: 22},
    {name: 'Andrea', age: 18}
]

let listOfNames = names.map( function(item) { //Funcion anonima
    console.log(item.name);
});

//es6

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    //...;
}

const listOfNames4 = name => {
    //...;
}

const square = num => num * num;

//Promesas - Asincronismo

const helloPromise = () => { //Arrow function
    return new Promise((resolve, reject) => { //Promesa
        if (true) {
            resolve('Hey!');
        }
        else {
            reject('Ay :(');
        }
    });
    //resolve, reject
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));


//---------------------------------------------------------------------------
//Clase 5

class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;       
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2, 4));

//---

import { hello } from './module.js';

console.log(hello());

//---Generator

function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if(true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);