//1. var let const
// break up with var
const numbers = [12, 546, 45, 98];
let salary = 445;
salary = 450;
// console.log(salary);

//2. default parameter
function calculateSalary(salary = 0, tax = 0.25, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}
const result = calculateSalary(100, 0, 30);
// console.log(result);

// 3.template string
const elementHTML = `
<div>
<h1>name:</h1>.
<p>Address: </P>
<p>salary: ${calculateSalary(10000, 0, 0)}</P>
<p>others:  ${numbers[2]}</P>
</div>

`;
// 4.arrow function

const doubleIt = x => x * 2;
const calculateSalary3 = (salary, tax, bonus) => salary - salary * tax + bonus;


// 5.spread
const ages = [11, 13, 15, 14, 10, 17];
const newAges = [...ages, 22, 24, 20];

//destructring

const { x, y, z, ...c } = { x: 54, y: 23, z: 33, name: 'sakib al hasan', salary: 45000 };
const [a, b, ...r] = [12, 45, 32, 32];


