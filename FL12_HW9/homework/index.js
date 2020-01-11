//1 good
function convert() {
  let arr = [];
  for (let i = 0; i <= arguments.length; i++) {
    if (typeof arguments[i] === 'string') {
      arr.push(Number(arguments[i]));
    } else if (typeof arguments[i] === 'number') {
      arr.push(String(arguments[i]));
    }
  }
  return arr;
}
convert('1', 2, 3, '4');
//2 good
function executeforEach(arr, func) {
  for (let el of arr) {
    func(el);
  }
}
executeforEach([1, 2, 3], function(el) {
  console.log(el * 2);
});
//3 good
function mapArray(arr, func) {
  let newArr = [];
  executeforEach(arr, el => newArr.push(func(+el)));
  return newArr;
}
mapArray([2, '5', 8], function(el) {
  return el + 3;
});
//4 good
function filterArray(arr, func) {
  let newArr = [];
  executeforEach(arr, el => func(el) ? newArr.push(el) : '');
  return newArr;
}
filterArray([2, 5, 8], function(el) {
  return el % 2 === 0;
});
//5 good
function flipOver(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
flipOver('hey world');
//6 good
function makeListFromrange(arr) {
  let newArr = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    newArr.push(i);
  }
  return newArr;
}
makeListFromrange([1, 5]);
//7 good
const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];
function getArrayOfKeys(arr, key) {
  let newArr = [];
  executeforEach(arr, el => newArr.push(el[key]));
  return newArr;
}
getArrayOfKeys(actors, 'name');
//8 good
let minNumber = 30;
function substitute(arr) {
  return mapArray(arr, el => el <= minNumber ? '*' : el);
}
substitute([58, 14, 48, 2, 31, 29], mapArray);
//9 good
const date = new Date(2019, 0, 2);
function getPastDay(data, number) {
  let a = data.setDate(data.getDate() - number);
  let b = new Date(a);
  return b.getDate();
}
getPastDay(date, 2);
//10 good
function formatDate(date) {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let trueFormat = `${date.getFullYear()}/${month}/${day} ${hours}:${minutes}`;
  return trueFormat;
}
formatDate(new Date('6/15/2018 09:15:00'));
