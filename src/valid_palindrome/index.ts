export default function isPalindrome(s: string): boolean {
    // 文字列を小文字に変換し、英数字以外の文字を除去
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    // 文字列を反転
    const reversedString = cleanedString.split('').reverse().join('');
    // 反転した文字列と元の文字列を比較
    return cleanedString === reversedString;
}
