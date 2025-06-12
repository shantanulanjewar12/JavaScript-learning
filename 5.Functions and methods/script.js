// // function defination
// function print(msg)     //parameter passed
// {
//     console.log(msg);
// }
// // Function call
// print(5);       //argument given


// function sum(a,b)
// {
//     console.log(a+b);
// }
// sum(10,20);
// sum(10.88,20.9235);


// function sum(x,y)
// {
//   s=x+y ;
//   return s;
// }
// let val=sum(5,3);
// console.log(val);
// local variables - (variables  of functions are of block level)


//                     //Arrow function
// const arrowSum=(a,b)=>{
//     console.log(a+b);
// }
// console.log(arrowSum);
// arrowSum(3,2);


//         // Q1
// function countVowels(str)
// {
//     let count=0;
//     for(const char of str)
//     {
//         if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u")
//         {
//             count++;
//         }
//     }

//     console.log(count);
// }
// countVowels("Shantanu");


//  forEach loop in Arrays- Higher order function/method which takes another function as parameter or return them
// function abc()
// {
//     console.log("hello");
// }

// function myFunc(abc)        //callback
// {
//     return abc;
// }

// let arr=[1,2,3,4,5];
// arr.forEach(function printVal(val)
// {
//     console.log(val);
// })


// // Q2
// let nums=[2,3,4,5,6];
// nums.forEach( (num)=> {
//     console.log(num*num);
// } )


// // Map Array method-         creates new array
// let nums = [2, 3, 4, 5, 6];

// nums.map(
//     (val)=>{
//         console.log(val*val);
//     }
// )


//                                 // Reduce method of array-[want one value as outut]
// let arr=[2,20,55,3,56,2];

// const gretaer=arr.reduce(
//     (prev,curr)=>
//     {
//         return prev>curr ? prev : curr;
//     }
// )

// console.log(gretaer);


// // Q3:
// let marks=[97,64,32,49,99,96,86];

// let toopers=marks.filter(
//     (val) =>
//     {
//         return val>90;
//     }
// )
// console.log(toopers);