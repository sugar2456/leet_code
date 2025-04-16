import isValid from "./index";
describe("Valid Parentheses", () => {
  test("should return true for valid parentheses", () => {
    expect(isValid("()")).toBe(true);
    expect(isValid("()[]{}")).toBe(true);
    expect(isValid("{[]}")).toBe(true);
  });

  test("should return false for invalid parentheses", () => {
    expect(isValid("(]")).toBe(false);
    expect(isValid("([)]")).toBe(false);
    expect(isValid("{[}")).toBe(false);
  });

  test("should return true for empty string", () => {
    expect(isValid("")).toBe(true);
  });
});
