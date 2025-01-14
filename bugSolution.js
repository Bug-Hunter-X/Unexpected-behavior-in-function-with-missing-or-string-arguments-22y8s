function foo(a, b) {
  a = typeof a === 'number' ? a : 0; //Check if a is number. If not assign 0
  b = typeof b === 'number' ? b : 0; //Check if b is number. If not assign 0
  return a + b;
}
console.log(foo(1, 2)); // 3
console.log(foo(1));    // 1
console.log(foo(1, "2")); // 1
console.log(foo("1", 2)); // 3