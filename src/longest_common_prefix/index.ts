/**
 * 共通の接頭辞を取得する
 * 
 * [処理の流れ]  
 * 空文字が一つでもあるなら、共通の文字列がないので空文字を返す  
 * 最初の単語を基準に共通接頭辞に設定する  
 * 単語のリストをループで回す  
 * 共通接頭辞が出来上がるまでループを回す  
 * 見つからない場合、一文字づつ短くする。全て切り取ったら空文字を返す  
 * 共通のワードが見つかったらループを抜けて単語を返す  
 * 
 * @param strs 複数のワードの配列
 * @returns 共通の接頭辞
 */
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