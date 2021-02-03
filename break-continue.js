const numbers=[1,-2,3,4,-5,6,-7,8,9,-10];
// break statement
for(let i=0; i<numbers.length; i++){
    if(numbers[i]>7){
        break;
    }
    console.log(numbers[i]);
}
// continue statement
for(let i=0; i<numbers.length; i++){
    if(numbers[i]<0){
        continue;
    }
    console.log(numbers[i]);
}