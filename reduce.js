// 31-6 (optional) Explore Reduce and Dot notation:
// map, forEach,filter,find, resuce

const numbers = [1, 2, 3, 4, 5];
//.reduce (accumulatorFunction, initial value)
//accumulatorFunction use two parameters

// const total = number.reduce((previous, current) => previous + current, 0);
const total = numbers.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current;
}, 0);