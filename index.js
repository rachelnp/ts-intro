"use strict";
//#1-2
let firstName = "Rachel";
let birthday = "04/12/1997";
let statement = `Name: ${firstName} | Date Of Birth: ${birthday}`;
console.log(statement);
//#3-4//
let numList = [];
numList.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let sum = 0;
for (let num of numList) {
    sum = sum + num;
}
console.log(sum);
// console.log(numList);
// let [first, second,third,fourth,fifth,sixth,seventh,eighth,nineth,tenth ] = numList
// function getSum (a : number, b : number ,c : number , d : number , e : number , f : number, g : number, h : number, i : number, j : number ) { 
//     let sum = a + b + c + d + e + f + g + h + i + j; 
//     return [sum]
// }
// let [theSum] = getSum (first,second,third,fourth,fifth,sixth,seventh,eighth,nineth,tenth); 
// console.log(theSum);
// //#5-6//
// //destructuring an object//
// let person = {
//     firstName: 'Bruce',
//     lastName: 'Wayne',
//     nickName: 'The Batman'
// };
// let object = {
//     contactName: "Rachel",
//     dob: "04/12/97",
//     role: "fullstack student"
// }
// let {contactName, dob, role} = object; 
// console.log(contactName);
// console.log(dob); 
// console.log(role); 
// let objectString: string = `${contactName} is a ${role} and was born on ${dob}.`
// console.log(objectString);
