function makeNumber(a) {
  return a
    .split('')
    .filter(onlyNumber => !isNaN(onlyNumber))
    .join('');
}
makeNumber('fn4n7n8m9');
