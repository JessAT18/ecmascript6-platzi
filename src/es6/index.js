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

