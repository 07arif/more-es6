// 31-4 Map string array, array of objects map, foreach 
const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n / 2);
const third = numbers.map(x => x / 3);
// console.log(half);
// console.log(third);

const friends = ['tom hanks', 'tom cruise', 'tom brady', 'tom solaiman'];
const firstLetters = friends.map(friend => friend[0]);
// console.log(firstLetters);

const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);


const products =
    [
        { id: 1, name: 'laptop', price: 40000 },
        { id: 1, name: 'mobiled', price: 40000 },
        { id: 1, name: 'lwatcd', price: 40000 },
        { id: 1, name: 'lblate', price: 40000 },


    ]
// const items = products.map(products => console.log(products.name))
const items = products.map(product => product.name);
const prices = products.map(product => product.price);
// console.log(items);
// console.log(prices);


