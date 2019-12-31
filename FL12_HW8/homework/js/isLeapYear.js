function isLeapYear(value) {
  let tryDate = new Date(value).getFullYear();
  if (isNaN(tryDate)) {
    return 'Invalid Date';
  } else if (
    tryDate % 400 === 0 ||
    (tryDate % 4 === 0 && tryDate % 100 !== 0)
  ) {
    return tryDate + ' is a leap year';
  } else {
    return tryDate + ' is a not a leap year';
  }
}
isLeapYear('12131313131354656566545');
isLeapYear('2021-01-15 13:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2020-01-01 00:00:00');
