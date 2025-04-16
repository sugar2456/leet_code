import maxProfit from ".";

describe("maxProfit", () => {
  it("should return 5 for prices [7, 1, 5, 3, 6, 4]", () => {
    const prices = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices)).toBe(5);
  });

  it("should return 0 for prices [7, 6, 4, 3, 1]", () => {
    const prices = [7, 6, 4, 3, 1];
    expect(maxProfit(prices)).toBe(0);
  });

  it("should return 2 for prices [2, 1]", () => {
    const prices = [2, 1];
    expect(maxProfit(prices)).toBe(0);
  });
});
