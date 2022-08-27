const numbers = [13, 30, 12, 35, 54, 15, 1, 5];
const bigNumber = numbers.filter(number => number > 20);
const tiny = numbers.filter(number => number < 20);
const even = numbers.filter(n => n % 2 === 0);
// console.log(bigNumber);
// console.log(tiny);
// console.log(even)

const products =
    [
        { id: 1, name: 'laptop', price: 40000 },
        { id: 1, name: 'mobiled', price: 45000 },
        { id: 1, name: 'lwatcd', price: 20000 },
        { id: 1, name: 'lblate', price: 23000 },
    ];
// const expensive1 = products.filter(product => product.price > 1000);
// const expensive = products.filter(product => product.price > 100000);
const expensive = products.filter(product => product.price < 100);

console.log(expensive)
