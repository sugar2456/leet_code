import removeDuplicates from ".";

describe("Remove Duplicates from Sorted Array", () => {
  it("正常系パターン１", () => {
    const input = [1, 1, 2];
    const expextedNums = [1, 2];
    const result = removeDuplicates(input);
    expect(result).toBe(expextedNums.length);

    for (let i = 0; i < result; i++) {
      expect(input[i]).toBe(expextedNums[i]);
    }
  });
  it("正常系パターン２", () => {
    const input = [0, 0, 1, 1, 1, 2, 2, 3, 4];
    const expextedNums = [0, 1, 2, 3, 4];
    const result = removeDuplicates(input);
    expect(result).toBe(expextedNums.length);

    for (let i = 0; i < result; i++) {
      expect(input[i]).toBe(expextedNums[i]);
    }
  });
  it("正常系パターン３", () => {
    const input = [1];
    const expextedNums = [1];
    const result = removeDuplicates(input);
    expect(result).toBe(expextedNums.length);
    for (let i = 0; i < result; i++) {
      expect(input[i]).toBe(expextedNums[i]);
    }
  });
});
