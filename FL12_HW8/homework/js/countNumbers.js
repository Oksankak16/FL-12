function makeNumber(val) {
  let counter = val
    .split('')
    .filter(onlyNumber => !isNaN(onlyNumber))
    .sort((a, b) => a - b);
  let res = {};
  counter.forEach(numbers => {
    if (Object.keys(res).includes(numbers)) {
      res[numbers]++;
    } else {
      res[numbers] = 1;
    }
  });
  return res;
}
makeNumber("fn4n7n8m9ff7f64");
