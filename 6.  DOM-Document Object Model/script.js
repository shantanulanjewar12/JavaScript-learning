// // By id name
// let heading1= document.getElementById("firstoneheading");
// console.dir(heading1);

// // by class name
// let headings = document.getElementsByClassName("classheading");
// console.dir(headings);
// console.log(headings);

// // Selection with tags
// let para=document.getElementsByTagName("p");
// console.dir(para);


// // Query selector
// let elements= document.querySelector("p");
// console.dir(elements);

// let firstelements1= document.querySelector("p");
// console.dir(firstelements1);

// let allelements1= document.querySelectorAll("p");
// console.dir(allelements1);

// let allelements2= document.querySelectorAll("#firstoneheading");
// console.dir(allelements2);

// let allelements3= document.querySelectorAll(".classheading");
// console.dir(allelements3);



// console.dir(document.body.firstChild);
// console.dir(document.querySelectorAll("p"));

// console.log(document.body.firstElementChild);  //-gives first element child


// console.log(document.body.firstElementChild.childNodes);        //-gives text node,cooment node & elements


// console.log(document.body.firstElementChild.children);      //-gives only html elements


// console.log(document.body.firstElementChild.children[2].nextElementSibling);


//      // By class Name
// let aaa=document.getElementsByClassName("box");
// console.log(aaa);
// aaa[1].style.backgroundColor="red";



// //          // By ID
// let zz=document.getElementById("2");
// console.log(zz);
// zz.style.backgroundColor="red";



//          // Query selector
// document.querySelector(".box");     //- returns first element

// document.querySelectorAll(".box");      //- returns a collection of html which contains all the elements containg class .box




//   //                          //Attributes
//   let div=document.querySelector("div");
//   console.log(div);

//   let id=div.getAttribute("id");
//   console.log(id);

  

// let newBtn=document.createElement("button");
// newBtn.innerText="click me!";
// console.log(newBtn);

// let div=document.querySelector("div");
// //  div.prepend(newBtn);
// div.append(newBtn);
//  div.before(newBtn);
//  div.after(newBtn);

// // delete
// let para = document.querySelector("p");
// para.remove();


// // Q1
// let newbtn=document.createElement("button");
// newbtn.innerText="Click ME!";
// newbtn.style.Color="white";
// newbtn.style.backgroundColor="red";
// let h1=document.querySelector("h1");
// // h1.before(newbtn);
// // document.querySelector("body").prepend(newbtn);




// // ClassList
// let para=document.querySelector("p")
// para.classList.add("Twoo");


