import plusOne from ".";

describe("plusOne", () => {
    it("123", () => {
        expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    });
    it("999", () => {
        expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
    });
});