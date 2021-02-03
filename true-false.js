// False value list:0,empty string(faka string),undefined value,null value,NaN(not a number)

//value check 0 chara always true
const age=4;
if(age){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//faka string chara always true
const name="Mahfuz Alam";
if(name.length>0){
    console.log("true");
}else{
    console.log("false");
}

//undefined value always false
let friendName;//there are no value defined 
console.log(friendName);
if(friendName){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//null value false

let str=null;
console.log(str);
if(str){
    console.log("true");
}
else{
    console.log("false");
}


//NaN value check

let number=NaN;
console.log(number);
if(number){
    console.log("true");
}
else{
    console.log("false");
}