// // Object
// const student = {
//     fullName: "Shantanu",
//     marks: 98,
//     //methods
//     printMarks: function () {
//         console.log("Marks= ", this.marks);
//     },
// };

// const employee ={
//     calcTax()
//     {
//         console.log("tax rate is 10%.");
//     },
// }

// const karanArjun = {
//     salary:50000,
// };

// // Set Prototype- Prototypes are objects whithin objects and methods
// karanArjun.__proto__ =employee;
// // calcTax function is invoked in karanArjun function through Prototype



// //Classes in JS
// class Car {

//     constructor(brand,milegae)
//     {
//         console.log("Constructor Called.");
//         this.brand=brand;
//         this.milegae=milegae;
//     }

//     start()
//     {
//         console.log("start");
//     }

//     stop()
//     {
//         console.log("stop");
//     }

//     // setBrand(brand)
//     // {
//     //     this.brand=brand;
//     //     // this.brand1=brand;           // // this ke sath ka name same ya diff dono ho skte hai
//     // }

// }

// let fortuner1 = new Car("brand1",20);      //constructor called
// console.log(fortuner1);
// let fortuner2 = new Car("brand2",50);      //constructor called
// console.log(fortuner2);

// //    //   fortuner1.setBrand("havv");
// console.log(fortuner1.brand);




                        //  Inheritance
// class parent{

//     constructor()
//     {
//         console.log("This is parent Construtor.");
//         this.species = "homo Sapiens";
//     }

//     hello()
//     {
//         console.log("hello");
//     }

//     work()          //method Overriding-id child's and parent's have same method,child's method will be used.
//     {
//         console.log("Do Nothing..");
//     }
// }

// class child extends parent{

//     constructor(childName)
//     {
//         console.log("Enter child Construtor.");
//         super();
//         this.childName=this.childName;
//         console.log("Exit child Construtor.");
//     }

//     work()
//     {
//         console.log("working...");
//     }
// }

// let obj=new child("childNameAsh");
// obj.work();
// obj.hello();







