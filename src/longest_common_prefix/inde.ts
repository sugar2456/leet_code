export default function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
    
    // 最初の文字列を基準にする
    let prefix = strs[0];
    
    // 残りの文字列と比較
    for (let i = 1; i < strs.length; i++) {
        // 共通接頭辞がなくなるまで短くする
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    
    return prefix;
}