import containsDuplicate from ".";

describe("container duplicate テスト", () => {
    it("重複あり", () => {
        const input = [1,2,3,1];
        const actual = containsDuplicate(input);
        const expected = true;

        expect(actual).toBe(expected);
    });

    it("重複なし", () => {
        const input = [1,2,3,4];
        const actual = containsDuplicate(input);
        const expected = false;

        expect(actual).toBe(expected);
    });

    it("複数の重複あり", () => {
        const input = [1,1,1,3,3,4,3,2,4,2];
        const actual = containsDuplicate(input);
        const expected = true;

        expect(actual).toBe(expected);
    });
});