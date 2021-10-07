"use strict";

const isNumberDivisibleBy =
  (/** @type number */ number) => (/** @type number */ divisible) =>
    number % divisible === 0;

const isNumberDivisibleByFive = (/** @type number */ number) =>
  isNumberDivisibleBy(number)(5);

const isNumberDivisibleByThree = (/** @type number */ number) =>
  isNumberDivisibleBy(number)(3);

const isNumberDivisibleByThreeAnFive = (/** @type number */ number) =>
  isNumberDivisibleByFive(number) && isNumberDivisibleByThree(number);

const fizzBuzz = (/** @type number */ number) => {
  const output = [];
  for (let i = 1; i <= number; i++) {
    if (isNumberDivisibleByThreeAnFive(i)) {
      output.push("FizzBuzz");
      continue;
    }

    if (isNumberDivisibleByThree(i)) {
      output.push("Fizz");
      continue;
    }

    if (isNumberDivisibleByFive(i)) {
      output.push("Buzz");
      continue;
    }

    output.push(i);
  }

  return output.join(", ");
};

export default fizzBuzz;
