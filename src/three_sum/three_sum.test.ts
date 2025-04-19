import threeSum from ".";

describe("three sums", () => {
    it("正常系", () => {
        const input = [-1,0,1,2,-1,-4];
        const actual = threeSum(input);
        const expected = [[-1,-1,2],[-1,0,1]];

        expect(actual).toEqual(expected);
    });

    it("異常系1", () => {
        const input = [0,1,1];
        const actual = threeSum(input);
        const expected:number[] = [];

        expect(actual).toEqual(expected);
    });

    it("異常系2", () => {
        const input = [0,0,0];
        const actual = threeSum(input);
        const expected = [[0,0,0]];

        expect(actual).toEqual(expected);
    });
})