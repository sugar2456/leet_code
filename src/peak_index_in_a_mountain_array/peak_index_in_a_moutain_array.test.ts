import peakIndexInMountainArray from "."

describe("Peak Index in a Mountain Array", () => {
    it("ピーク探索関数　正常系1", () => {
        const input = [0,1,0];
        const actual = peakIndexInMountainArray(input);
        const expected = 1;

        expect(actual).toBe(expected);
    });

    it("ピーク探索関数　正常系2", () => {
        const input = [0,2,1,0];
        const actual = peakIndexInMountainArray(input);
        const expected = 1;

        expect(actual).toBe(expected);
    });

    it("ピーク探索関数　正常系3", () => {
        const input = [0,10,5,2];
        const actual = peakIndexInMountainArray(input);
        const expected = 1;

        expect(actual).toBe(expected);
    });

})