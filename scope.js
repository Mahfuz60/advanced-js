const eidBonus=50;
function sum(num1,num2){
    let result =num1+num2+eidBonus;
    
    console.log(result);
    //block scope baire thake access kora jabe na jodi let and const use kora hoi but jodi var used kore hoi tahole baire thake access kora jabe ata ke hosting bole thake
    if(result>=40){
        console.log("Happy");
    }
    return result;
}
const output =sum(10,15);
console.log(eidBonus);
console.log(output);