// Your code goes here
const a=parseFloat(prompt('input value a:'));
const b=parseFloat(prompt('input value b:'));
const c=parseFloat(prompt('input value c:'));
if (isNaN(a)||isNaN(b)||isNaN(c)){
    alert('input values should be ONLY numbers');
}
    if(a===0 || b===0 || c===0){
    alert('A triangle must have 3 sides with a positive definite length')
    }
    // if(a===0 || b===0 || c===0){
    //     alert('Triangle doesn’t exist');
    //     }
    if(a===b && b===c){
        alert('Equilateral triangle');
    }
    else if(a===b || b===c || c===a){
        alert('Isosceles triangle');
    }
    else if(a!==b!==c){
        alert('Scalene triangle');
    }