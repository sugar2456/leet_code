/**
 * 複数の空白がある文字列を分割し、最後の単語の長さを返す  
 * 
 * [処理の流れ]  
 * 正規表現で連続した空白を分割する。/\s+/は、1つ以上の空白を表す。  
 * 最後のインデックスを指定して、最後の単語を取得し、その長さを返す。 
 * 
 * @param s 
 * @returns 
 */
export default function lengthOfLastWord(s: string): number {
    const words = s.trim().split(/\s+/);
    const lastWord = words[words.length - 1];
    return lastWord.length;
};