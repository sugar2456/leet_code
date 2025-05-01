import sqrt from ".";

describe("sqrt", () => {
  it("4の平方根は2", () => {
    const x = 4;
    const result = sqrt(x);
    expect(result).toBe(2);
  });
  it("9の平方根は3", () => {
    const x = 9;
    const result = sqrt(x);
    expect(result).toBe(3);
  });
  it("16の平方根は4", () => {
    const x = 16;
    const result = sqrt(x);
    expect(result).toBe(4);
  });
  it("8の平方根の近似値は2", () => {
    const x = 8;
    const result = sqrt(x);
    expect(result).toBe(2);
  });
  it("0の平方根は0", () => {
    const x = 0;
    const result = sqrt(x);
    expect(result).toBe(0);
  });
  it("1の平方根は1", () => {
    const x = 1;
    const result = sqrt(x);
    expect(result).toBe(1);
  });
});
