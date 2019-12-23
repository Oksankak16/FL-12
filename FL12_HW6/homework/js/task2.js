let a = parseInt(prompt('input value a:'));
let b = parseInt(prompt('input value b:'));
let c = parseInt(prompt('input value c:'));
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert('input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
  alert('A triangle must have 3 sides with a positive definite length');
} else if (a + b - c > 0 && a + c - b > 0 && b + c - a > 0) {
  if (a === b && b === c) {
    alert('Equilateral triangle');
  } else if (a === b || b === c || c === a) {
    alert('Isosceles triangle');
  } else if (a !== b !== c) {
    alert('Scalene triangle');
  } else {
    alert('Triangle doesn’t exist');
  }
}
