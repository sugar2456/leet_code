import isAnagram from ".";

describe("valid anagram", () => {
    it("アナグラム一致", () => {
        const inputSrc = "anagram";
        const inputTarget = "nagaram";

        const actual = isAnagram(inputSrc, inputTarget);
        const expected = true;

        expect(actual).toBe(expected);
    });

    it("アナグラム不一致", () => {
        const inputSrc = "rat";
        const inputTarget = "car";

        const actual = isAnagram(inputSrc, inputTarget);
        const expected = false;

        expect(actual).toBe(expected);
    })
});