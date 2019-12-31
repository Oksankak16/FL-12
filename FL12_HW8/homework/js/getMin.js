function getMin(...args) {
  return args.sort(function(a, b) {
    return a - b;
  })[0];
}
getMin(6, 4, 8, 7);
