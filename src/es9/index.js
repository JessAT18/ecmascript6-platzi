//---------------------------------------------------------------------------
//Clase 9

const obj = {
    name: 'Jessica',
    age: 22,
    country: 'BO'
}

let { name, ...all} = obj;
console.log(all);

//---

const obj2 = {
    name: 'Jessica',
    age: 22
};

const obj3 = {
    ...obj2,
    country: 'BO'
}

console.log(obj3);

//---

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('hello world'), 3000) //resolve ('Hello World')
        : reject (new Error('Test error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'));

//---

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ ;
const match = regexData.exec('2022-08-05');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);