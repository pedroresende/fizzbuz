"use strict";

/**
 * @param {number} number
 * @returns {(divisible: number) => boolean}
 */
const isNumberDivisibleBy = (number) => (divisible) => number % divisible === 0;

/**
 * @param {number} number
 * @returns boolean
 */
const isNumberDivisibleByFive = (number) => isNumberDivisibleBy(number)(5);

/**
 * @param {number} number
 * @returns boolean
 */
const isNumberDivisibleByThree = (number) => isNumberDivisibleBy(number)(3);

/**
 * @param {number} number
 * @returns boolean
 */
const isNumberDivisibleByThreeAnFive = (number) =>
  isNumberDivisibleByFive(number) && isNumberDivisibleByThree(number);

/**
 * @param {number} number
 * @returns string
 */
const fizzBuzz = (number) => {
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
