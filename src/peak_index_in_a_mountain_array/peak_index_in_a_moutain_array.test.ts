import peakIndexInMountainArray from "."

describe("Peak Index in a Mountain Array", () => {
    it("ピーク探索関数　正常系", () => {
        const input = [0,1,0]
        const actual = peakIndexInMountainArray(input);
        const expected = 1;

        expect(actual).toBe(expected);
    });
})