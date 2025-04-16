import intersection from ".";

describe("intersection of two arrays", () => {
    it("正常系パターン１", () => {
        const inputA = [1,2,2,1];
        const inputB = [2,2];

        const actual = intersection(inputA, inputB);

        const expected = [2];

        expect(actual).toEqual(expected);
    });

    it("正常系パターン２", () => {
        const inputA = [4,9,5];
        const inputB = [9,4,9,8,4];

        const actual = intersection(inputA, inputB);

        const expected = [9,4];

        expect(actual).toEqual(expected);
    })
});