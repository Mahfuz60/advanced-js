// double equal(==)only value check it
// triple equal(===)value and type both condition are check

const first=5;
const second=5;
//value and type same so true 
if(first===second){  
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//second example
const num1=10;
const num2='10';//value same but type different so false
if(num1===num2){
    console.log("condition is true");
}else{
    console.log("condition is false");
}