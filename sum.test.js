import { sum } from "./sum.js";

test("adds 1 + 2 to equal 3 ✅ passing test", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 2 + 2 to equal 5 ❌ failing test", () => {
  expect(sum(2, 2)).toBe(5);
});
