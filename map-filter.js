// general technique

// const num=[1,2,3,4,5,6,7,8,9,10];
// const output=[];
// for(let i=0;i<num.length;i++){
//     const element=num[i];
//     const result=element*element;
//     output.push(result);
// }
// console.log(output);

//map used 
const  numbers=[1,2,5,4,6,9,8,10,13,12,19,14,29,16,37,18,38,45,42,46,43];
const result=numbers.map(function(element){
    return element*element;
});
console.log(result);

// arrow function used map
const result2=numbers.map(x=>x*x);
console.log(result2);

//filter used 
const number2=[1,3,5,4,6,8,7,9,10,15,12,13,14,50,52,19,18,20,22,25,30];
const result3=number2.filter(x=>x%2==0);
console.log(result3);

const result4=number2.filter(x=>x>5);
console.log(result4);

const isThere=number2.find(x=>x>15);
console.log(isThere);