/**
 * アナグラム検査関数  
 * 
 * [処理の流れ]  
 * 長さが一致しているか  
 * すでに一致しているか  
 * charの配列に変換する  
 * ソートする  
 * charの配列を合体して、比較する  
 * ※charの配列をそのまま比較しようとすると参照のチェックで一致しない
 * @param s 検索対象の文字列
 * @param t 検索ワード
 * @returns 含めるか否か
 */
export default function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    if (s === t) return true;

    const copys = s.split('');
    const copyt = t.split('');

    copys.sort();
    copyt.sort();
    return copys.join('') === copyt.join('');
}