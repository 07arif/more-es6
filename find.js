
// 31-5 Implement filter, find on an array of objects
const numbers = [13, 30, 12, 35, 54, 15, 1, 5];

const fives = numbers.find(num => num % 5 === 0);
const findAll = numbers.filter(num => num % 5 === 0);
console.log(fives)
console.log(findAll)
//find ekta dekhabe
//filter son gula dekhabe

const products =
    [
        { id: 1, name: 'laptop', price: 40000 },
        { id: 1, name: 'mobiled', price: 45000 },
        { id: 1, name: 'watcd', price: 20000 },
        { id: 1, name: 'tblate', price: 23000 },
    ];
const cheap = products.find(product => product.price < 30000)
console.log(cheap)