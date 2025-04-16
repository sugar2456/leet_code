import maxSubArray from ".";

describe("最大部分配列", () => {
    test("例1", () => {
        expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    });
    test("例2", () => {
        expect(maxSubArray([1])).toBe(1);
    });
    test("例3", () => {
        expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
    });
    test("例4", () => {
        expect(maxSubArray([-1, -2, -3, -4])).toBe(-1);
    });
    test("例5", () => {
        expect(maxSubArray([1, 2, 3, 4, 5])).toBe(15);
    });
});