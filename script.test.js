import { getGreeting } from "./script.js";

test("morning greeting", () => {
  expect(getGreeting(9)).toBe("Good morning 🌅");
});
