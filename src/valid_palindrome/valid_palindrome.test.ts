import isPalindrome from ".";

describe("isPalindrome", () => {
    it("isPalindrome 正常系", () => {
        const input1 = "A man, a plan, a canal: Panama";
        const input2 = "race a car";
        const input3 = " ";
        
        expect(isPalindrome(input1)).toBe(true);
        expect(isPalindrome(input2)).toBe(false);
        expect(isPalindrome(input3)).toBe(true);
    });
    
    it("特殊文字を含むパリンドローム", () => {
        const input = "A man, a plan, a canal: Panama";
        expect(isPalindrome(input)).toBe(true);
    });
    
    it("パリンドロームではない文字列", () => {
        const input = "race a car";
        expect(isPalindrome(input)).toBe(false);
    });
    
    it("空文字と空白のみの文字列", () => {
        expect(isPalindrome("")).toBe(true);
        expect(isPalindrome(" ")).toBe(true);
    });
    
    it("数字を含むパリンドローム", () => {
        const input = "A1b2c3c2b1a";
        expect(isPalindrome(input)).toBe(true);
    });
    
    it("数字のみのパリンドローム", () => {
        const input = "12321";
        expect(isPalindrome(input)).toBe(true);
    });
});
