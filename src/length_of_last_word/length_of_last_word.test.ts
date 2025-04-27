import lengthOfLastWord from ".";

describe('lengthOfLastWord', () => {
    it('正常系１', () => {
        const s = 'Hello World';
        const result = lengthOfLastWord(s);
        expect(result).toBe(5);
    }
    );
    it('正常系２', () => {
        const s = '   fly me   to   the moon  ';
        const result = lengthOfLastWord(s);
        expect(result).toBe(4);
    }
    );
    it('正常系３', () => {
        const s = 'luffy is still joyboy';
        const result = lengthOfLastWord(s);
        expect(result).toBe(6);
    }
    );
});