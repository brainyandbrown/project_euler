function fibSum() {
  var i;
  var fib = [];
  fib[0] = 1;
  fib[1] = 2;
  var sum = 0;
  var number;
  var result;
  for (i = 2; i <= 31; i++) {
    fib[i] = fib[i-2] + fib[i-1];
      number = parseInt(fib[i]);
      if (number % 2 === 0) {
        result = sum += fib[i];
      }
  }
  return result;
}
