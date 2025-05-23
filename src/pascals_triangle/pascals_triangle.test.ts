import generate from ".";

describe('Pascal\'s Triangle', () => {
    it('パターン１', () => {
        expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
    });
    it('パターン２', () => {
        expect(generate(1)).toEqual([[1]]);
    });
    it('パターン３', () => {
        expect(generate(0)).toEqual([]);
    });
}
);