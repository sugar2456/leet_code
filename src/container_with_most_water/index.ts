/**
 * 最大面積
 * 
 * [処理の流れ]  
 * 左右のポインタを初期化する  
 * 最大面積を保持する変数を初期化する  
 * 左ポインタが右ポインタを超えるまでループする  
 * 現在のエリア面積を計算する  
 * 左ポインタの高さより右ポインタの高さが高いなら、
 * 左のポインタを移動する  
 * 右のポインタの高さより左ポインタの高さが高いなら、
 * 右のポインタを移動する  
 * 
 * @param height 高さの配列
 * @returns 最大面積
 */
export default function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while(left < right) {
        // 現在の容器の水量を計算
        const currentArea = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};