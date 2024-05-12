"use strict";

// завдання 1

console.log(addThemAll(2, 4));
console.log(addThemAll(1, 2, 3, 4));
console.log(addThemAll(5, 5, 10));

function addThemAll(...allNumbers) {
  //   1 варіант виконання!!!
  let res = 0;

  for (let elem of allNumbers) {
    res += elem;
  }

  return res;
  //   2 варіант виконання

  // let initialValue = 0;
  // let res = allNumbers.reduce((accumulator, currentValue) => {
  //   return accumulator + currentValue;
  // }, initialValue);
  // return res;
}

// завдання 2

console.log(multiply(5)(5));
console.log(multiply(2)(-2));
console.log(multiply(4)(3));

function multiply(a) {
  return function (b) {
    return a * b;
  };
}