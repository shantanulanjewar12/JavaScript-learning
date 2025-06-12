// Arrays in JS are Mutable :- can be changed
// let marks= [90,82,55,62,44,93,99];
// console.log(marks);
// console.log(marks.length);

// let naame=["Shaktiman","Tony stark","Homelander"];
// console.log(naame);
// console.log(naame.length);
// console.log(typeof(naame));

// marks[0]=9999;
// console.log(marks);

// for(let i=0;i<marks.length;i++)
// {
//     console.log(marks[i]);
// }

// For of loop
// for (let hero of naame) {
//     console.log(hero);
// }

// Q1: average
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for (let i of marks) {
//     sum=sum+i;
//     // console.log(i);    Prints the eleemts of the array [do not use marks[i]]
// }
// let avg=sum/marks.length;
// console.log(avg);


// Q2: 10% Off problem of finding offer cutted value 
// let itemPrice=[250,645,300,900,50];
// for(let i=0;i<itemPrice.length;i++)
// {
//     let offPrice=[];
//     offPrice[i]=(itemPrice[i])*0.1;
//     itemPrice[i]=itemPrice[i]-offPrice[i];
// }
// console.log(itemPrice);

// for(let i=0;i<itemPrice.length;i++)
// {
//     let offer=itemPrice[i]/10;
//     itemPrice[i] -= offer;
// }
// console.log(itemPrice);

            //Arrays method
// let item=[250,645,300,900,50];
// item.push(333333,452,2222);
// console.log(item);
// item.pop();         //- deletes last item
// console.log(item);

// // to-string
// console.log(item);
// console.log(item.toString());
// console.log(typeof(item.toString()));

// let marvel_heroes=["Iron man","Thor","hulk","halkeye","Black widow","captain america"];
// let dc_heroes=["batman","superman","aquaman","joker"];

// let heroes=marvel_heroes.concat(dc_heroes);
// console.log(heroes);


// // Unshift method- used to add elemnt at start
// marvel_heroes.unshift("Scarlet Witch");
// marvel_heroes.shift();


// // Slice method
// console.log(marvel_heroes.slice(1,3));

// // splice method - changes original array
// console.log(marvel_heroes.splice(3,3)); //deletd last element
// // add element
// marvel_heroes.splice(2,0,101);
// console.log(marvel_heroes);

// let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];
// companies.shift();      //delete from last
// companies.splice(2,1,"Ola");
// companies.push("amazon");       //adds at last