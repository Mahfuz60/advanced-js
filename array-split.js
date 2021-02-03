//slice
const numbers=[5,8,6,7,2,3,6,9,4,10,8];
const part=numbers.slice(2,8);//index 2 thake index 8 pojonto show korbe
console.log(numbers);
console.log(part);

//splice

const number2=[1,2,3,4,5,6,7,8,9,10,11,12];
const remove=number2.splice(3,4);//index 3 thake 4ta number count kore delete kore dibe

console.log(remove);
console.log(number2);

//joint element

const together=number2.join(", ");
console.log(together);