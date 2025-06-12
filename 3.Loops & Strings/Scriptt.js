// // for loop

// for(let i=0;i<5;i++)            //i defining in block scoope using let
// {
//     // console.log(i," ","Hello");
//     console.log("Hello");
// }

// // While loopl
// let i=1;
// while(i<=5)
// {
//     console.log("World.");
//     i++;
// } 

// // Do-while loop
// let j=20;
// do{
//     console.log("Hello World!!!");
//     j++;
// } while(j<=10);


// //  For-of loop
// let str="Shantanu";
// for (let i of str) {
//     console.log(i);
// }

//  For-in loop
// used for objects

// let student={
//     name:"Shantanu",
//     sirname:"lanjewar",
//     id:52,
//     cgpa:8.72
// };

// for(let key in student)   //returns key
// {
//     console.log("key= ",key," value= ",student[key]);
// }


// // Q1: print all even no from 0 to 100
// console.log("Even no's are: ")
// for(let i=0;i<=100;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
// }

// String
// let str1="Apna College";
// let str2='Shantanu';
// console.log(str1);
// console.log(str1.length);
// console.log(str1[0]);

// // Templates Literals
// let sentence=`This is a template literal.`;         // backtiks use - ` `
// console.log(sentence);

// let obj={
//     item:"PEN",
//     cost:100
// };
// // Template literals are used in this way(useful for this reason.)
// let output=`The cost of ${obj.item} is ${obj.cost} rupees.`;
// console.log(output);


// Escape Charachters-   \n \t 

                    // String methods
// console.log(str1.toUpperCase(str1));
// str1.toLowerCase
// These methods does not change the original string
// Strings are immutable in JS
// str1.trim
// str1.slice(start,end)-  ending value not inclusive
// str1.concat(str2);
// console.log(str1.replace("A","Z"));  -one time replacecment


let fullName=prompt("Enter Your Full Name without spaces: ");
console.log(fullName);

let username="@"+fullName+fullName.length;
console.log(username);
