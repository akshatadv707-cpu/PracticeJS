
const numbers = [1, 2, 3, 4];

console.log(numbers.map(n => n * 2));
console.log(numbers.filter(n => n % 2 === 0));
console.log(numbers.find(n => n > 2));
console.log(numbers.includes(2));
console.log(numbers.reduce((sum, n) => sum + n));

console.log([5,6].reduce((sum,n)=>sum+n,5));


console.log(numbers.pop());
console.log(numbers);

console.log(numbers.push(7));
console.log(numbers);
