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

//--------------------------------------------------------------------------

let hello = 'Hello';
let world = 'World';

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);