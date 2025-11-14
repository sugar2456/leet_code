import { findMedianSortedArrays } from ".";

describe("median of two sorted array", () => {
  it("正常系：奇数", () => {
    const num1 = [1, 3];
    const num2 = [2];

    const expected = 2;

    expect(findMedianSortedArrays(num1, num2)).toBe(expected);
  });

  it("正常系：偶数", () => {
    const num1 = [1,2];
    const num2 = [3,4];

    const expected = 2.5;

    expect(findMedianSortedArrays(num1, num2)).toBe(expected);
  });

  it("正常系：偶数　境界値最大", () => {
    const num1 = Array.from({ length: 1000}, (_,i) => i);
    const num2 = Array.from({ length: 1000}, (_,i) => i * 2);

    const expected = 666;

    expect(findMedianSortedArrays(num1, num2)).toBe(expected);
  });

  it("正常系：偶数　境界値最小", () => {
    const num1 = [0];
    const num2 = [10];

    const expected = 5;

    expect(findMedianSortedArrays(num1, num2)).toBe(expected);
  });

    it("正常系：偶数　配列の要素に差がある", () => {
    const num1 = [500];
    const num2 = Array.from({ length: 1000}, (_,i) => i + 1);

    const expected = 500;

    expect(findMedianSortedArrays(num1, num2)).toBe(expected);
  });
});