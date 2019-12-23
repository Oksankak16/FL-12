let a = parseFloat(prompt('input value a:'));
let b = parseFloat(prompt('input value b:'));
let c = parseFloat(prompt('input value c:'));
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert('Inavalid input data');
} else {
  let d, x1, x2;
  d = b * b - 4 * a * c;
  console.log(d);
  x1 = (-b + Math.sqrt(d)) / (2 * a);
  x2 = (-b - Math.sqrt(d)) / (2 * a);
  if (d === 0) {
    console.log(x1);
  } else if (d > 0) {
    console.log(x1);
    console.log(x2);
  } else if (d < 0) {
    console.log('no solution');
  }
}
