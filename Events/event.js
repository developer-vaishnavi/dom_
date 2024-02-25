let btn = document.querySelector("button");
btn.onclick = () =>{
    console.log("Button was clicked");
}
btn.onclick = () =>{
    console.log("Button was clicked2");
}
let div = document.querySelector("div");

div.onmouseover = () =>{
    console.log("you'r inside a div");
}

div.onmouseenter = (evt) =>{
    console.log(evt);
}

let btn1 = document.querySelector(".btn");
console.log(btn1);

let fun = () =>{
    console.log("Clicked");
};
btn1.addEventListener("click",fun);
// btn1.addEventListener("click", ()=>{
//     console.log("Clicked2");
// });


btn.removeEventListener("click",fun);

let mode = document.querySelector(".Change_Mode");
let body = document.querySelector("body");
let sc = "light";
mode.addEventListener("click",()=>{
    if(sc==="light"){
        body.classList.add("dark");
        body.classList.remove("light");
        sc="dark";
    }
    else{
        {
            body.classList.add("light");
            body.classList.remove("dark");
            sc="light";
        }
    }
});