const data = {
    frontend: 'Jessica',
    backend: 'Andrea',
    design: 'Torrez'
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//--
const data2 = {
    frontend: 'Jessica',
    backend: 'Andrea',
    design: 'Torrez'
};

const values = Object.values(data2);
console.log(values);
console.log(values.length);

//--
const myString = 'hello';
console.log(myString.padStart(7, 'hi'));
console.log(myString.padEnd(12, ' -----'));
console.log('food'.padEnd(12, ' -----'));

//--

const obj = {
    name: 'Jessica',
}