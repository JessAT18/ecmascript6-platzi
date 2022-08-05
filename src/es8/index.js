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

//---------------------------------------------------------------------------
//Clase 8

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Test error'));
    });
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

//--

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();