// //Synchronous
// console.log(" I ");
// console.log(" spoon ");
// console.log(" eat ");
// console.log(" ice cream ");
// console.log(" with a ");


//Asynchronus

// setTimeout(() => {
//     console.log(" ice cream ");

// }, 3000)


//Callback
// function one(call_two){
//     console.log("step 1 complete,call step 2.");
//     call_two();
// }

// function two(){
//     console.log("step 2");
    
// }
// one(two);


//Ice cream

let order=(call_production)=>{
    console.log("Order Placed please call production.");
    call_production();
    
};

let production=()=>{
    console.log("order received,starting production");
    
};

order(production);