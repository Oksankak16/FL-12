// Your code goes here
const a=parseFloat(prompt('input value a:'));
if (isNaN(a)){
    alert('Inavalid input data');
}
const b=parseFloat(prompt('input value b:'));
if (isNaN(b)){
    alert('Inavalid input data');
}
const c=parseFloat(prompt('input value c:'));
let d, x1,x2;
if (isNaN(c)){
    alert('Inavalid input data');
}
d=b*b-4*a*c;
console.log(d);
x=x1=(-b+Math.sqrt(d))/(2*a);
x2=(-b-Math.sqrt(d))/(2*a);
if(d===0){
    console.log(x);
}else if(d>0){
    console.log(x1);
    console.log(x2);
}
else if(d<0){
    console.log('no solution')
}
