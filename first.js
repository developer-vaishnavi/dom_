// console.log("Welcome to WebDev World");
// name = "Vaishnavi Sinha"
// console.log(name);
// age = 25
// console.log(age)
// marks = 76.7
// console.log(marks)
// isavailable = true
// console.log(isavailable)

// // object
// const Student ={
//     name : "Vaishnavi Sinha",
//     age : 23,
//     marks : 76.7
// };
// console.log(Student);
// console.log(Student.name);
// console.log(Student["age"]);
// // for-in loop
// for(let i in Student){
//     console.log(i);
// }

// // To update the value of object
// Student["age"] = Student["age"]+2;

// console.log(Student.age);

// // Profile Object
// const Profile ={
//     userName : "vaishnavisinha",
//     follow : true, 
//     message : true,
//     post : 195+" post",
//     follower : 2345+" follower",
//     backFollower : 4+" following",
//     name : "VaishnaviSinha",
//     title : "Entreprenuer",
//     Summary : "Apna College "

// };
// console.log(Profile);
// // aLERT
// /*
// alert("Hello!");
// */
// // Prompt

// // let x = prompt('Enetr a number');

// // if(x%5==0){
// //     console.log("Yes");
// // }
// // else {
// //     console.log("No");
// // }

// // for loop
// for(let i=1;i<=5;i++){
//     console.log("Web Dev");
// }


// // for-of loop

// let Fname = "Vaishnavi"
// for(let i of Fname){
//     console.log(i);
// }

// // let game = 456;
// // let input = prompt("Guess the number");
// // while(input!=game){
// //     input = prompt("You entered the wrong number! Guess number again");
// // }

// console.log("Vaishnavi \n Sinha");

let arr = [34,56,23,78,89,43];
let sum =0;
for(let i =0;i<arr.length;i++){
    arr[i] = (arr[i]*10)/100;
}
for(let el of arr){
    console.log(el);
}
//console.log(`Sum is ${sum/arr.length}`);
arr.splice(2,2,76,76);
console.log(arr);
let companies = ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"]
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(1,1,"OLA");
console.log(companies);
companies.push("Amazon");
console.log(companies);