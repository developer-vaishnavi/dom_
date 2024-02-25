// let el = document.getElementsByClassName("myClass");
// console.log(el);
// let q = document.querySelector(".myClass");
// let tag = q.tagName;
// console.log(tag);
// console.log(q.innerText);

// let query = document.querySelector("#myId");
// let tag2 = query.tagName;
// console.log(tag2);
// console.log(q.innerText);

// let i = document.querySelector(".fruits");
// console.log(i.innerHTML);
// console.log(i.innerText);


let h2 = document.getElementById("h2Id");
let text = h2.innerText;
h2.innerText = text+" from Apna college";
console.log(h2.innerText);

let box = document.querySelectorAll(".myClass");
// console.log(box);
// box[0].innerText = "First Div";
// console.log(box[0].innerText);
// box[1].innerText = "Second Div";
// console.log(box);
// box[2].innerText = "Third Div";
// console.log(box);

// we can access through loops also
let idx =1;
for(let div of box){
    div.innerHTML=`unique element ${idx}`;
    idx++;
}
let create = document.createElement("button");
create.innerText = "ClickMe!";
let ch = document.querySelector(".div");
ch.append(create);
ch.prepend(create);
let create2 = document.createElement("button");
create2.innerText = "New Button";
ch.before(create2);
ch.after(create2);