import isPalindrome from ".";

describe('Palindrome Number', () => {
    it('正常系パターン１', () => {
        const result = isPalindrome(121);
        expect(result).toBe(true);
    });
    it('正常系パターン２', () => {
        const result = isPalindrome(114411);
        expect(result).toBe(true);
    });
    it('正常系パターン３', () => {
        const result = isPalindrome(12345654321);
        expect(result).toBe(true);
    });
    it('正常系パターン４', () => {
        const result = isPalindrome(1);
        expect(result).toBe(true);
    }
    );
    it('異常系パターン１', () => {
        const result = isPalindrome(-121);
        expect(result).toBe(false);
    }
    );
    it('異常系パターン２', () => {
        const result = isPalindrome(10);
        expect(result).toBe(false);
    }
    );
});