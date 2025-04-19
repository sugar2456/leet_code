import rob from ".";

describe("house robber", () => {
  it("正常系１", () => {
    const input = [1, 2, 3, 1];
    const actual = rob(input);
    const expected = 4;

    expect(actual).toBe(expected);
  });
  it("正常系２", () => {
    const input = [2, 7, 9, 3, 1];
    const actual = rob(input);
    const expected = 12;

    expect(actual).toBe(expected);
  });
});
