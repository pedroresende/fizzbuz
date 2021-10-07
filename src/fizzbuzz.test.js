"use strict";

import fizzBuzz from "./fizzbuzz";

describe("FizzBuzz", () => {
  it("should return a 1, 2 when the provided number is 2", () => {
    expect(fizzBuzz(2)).toEqual("1, 2");
  });

  it("should return Fizz when the provided number is divisible by 3", () => {
    expect(fizzBuzz(3)).toEqual("1, 2, Fizz");
  });

  it("should return Buzz when the provided number is divisible by 5", () => {
    expect(fizzBuzz(5)).toEqual("1, 2, Fizz, 4, Buzz");
  });

  it("should return FizzBuzz when the provided number is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toEqual(
      "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz"
    );
  });
});
