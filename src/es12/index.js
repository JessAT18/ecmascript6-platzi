const string = 'JavaScript es dificil :(, pero JavaScript es muy popular, asi que toca aprenderlo xd';

const replacedString = string.replace('JavaScript', 'React');
console.log(replacedString);

const replacedString2 = string.replaceAll('JavaScript', 'React');
console.log(replacedString2);

//--
class Message{
    #show(val) { //con # hacemos un metodo privado
        console.log(val);
    };
    // get #add(val) {
    //     //...
    // }
}

const message = new Message();
message.show('OwO');

//--
const promise1 = new Promise((resolve, reject) => reject('1'));
const promise2 = new Promise((resolve, reject) => resolve('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise1, promise2, promise3]) //Se retorna el primer valor que se retorna
    .then(response => console.log(response));

//--
class AnyClass {
    constructor(element)
    //this.ref = new WeakRef(element);
    ///{...}
}

//--
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

console.log(isTrue ||= isFalse);

let isUndef = undefined;
console.log(isUndef ??= isFalse);