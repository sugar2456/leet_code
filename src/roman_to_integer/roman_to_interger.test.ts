import romanToInt from ".";

describe("Roman to Integer", () => {
  it("加算パターン", () => {
    expect(romanToInt("III")).toBe(3);
    expect(romanToInt("LVIII")).toBe(58);
  });
  it("減算パターン", () => {
    expect(romanToInt("IV")).toBe(4);
    expect(romanToInt("IX")).toBe(9);
    expect(romanToInt("XL")).toBe(40);
    expect(romanToInt("XC")).toBe(90);
    expect(romanToInt("CD")).toBe(400);
  });
  it("加算と減算の組み合わせ", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });
});
