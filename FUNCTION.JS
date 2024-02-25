let countVowel = (str)=>{
    for(let i of str){
        if(i=='a' || i=='e' || i== 'i'|| i=='o' || i=='u'){
            console.log(i);
        }
    }
}

countVowel("VOrange");
//for each

let arr = [2,4,3,8,13];
arr.forEach(function print(a){

    console.log(a);
});

arr.forEach(function print(a,ind){
    console.log((a*a),ind);
})
arr.forEach(function print(a,ind,arr){
    console.log((a*a),ind,arr);
})

let newArr = arr.map((val)=>{
    return val*2;
});
console.log(newArr);
let Even = arr.filter((val)=>{
    return val%2==0;
});
console.log(Even);

// Reduce
let red = [2,4,67,78,12,54,6,28.90,92,99,123,456,753];
// sum of array
const sum = red.reduce((x,y)=>x+y);
console.log(sum);
const gre = red.reduce((x,y)=>x>y?x:y);
console.log(gre);
let marks = red.filter((val)=>{ 
    return val>90?val:0
});
console.log(marks);

let n = prompt("Enter a number");

let taskArr = [];
for(let i=0;i<n;i++){
    taskArr[i]=i+1;
}

const ans = taskArr.reduce((x,y)=> x+y);
console.log(ans);
const ansMul = taskArr.reduce((x,y)=> x*y);
console.log(ansMul);
