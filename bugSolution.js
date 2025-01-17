function foo(a, b) {
  return Object.is(a, b);
}

console.log(foo(NaN, NaN)); // true
console.log(foo(0, -0)); // false
console.log(foo(undefined, undefined)); // true