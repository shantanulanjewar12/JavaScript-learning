// var is not used in javascrpt
// Use let

{ //Block
let Name = "Tony stark";
let age=24;
console.log(Name+"\n"+age);
}


// console.log(Name);       Thows an error
// console.log(a);

const PI=10.5;
// PI=55;
console.log(PI)

// Object
const Student=
{
    fullName:"shantanu lanjewar",
    cgpa:8.72,
    age:20,
    isPass: true,
    "job role":"hello"
};

console.log(Student);

console.log(Student.age);

Student["age"]=Student["age"]+1;

console.log(Student["cgpa"]);


