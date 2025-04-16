/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {
    
    return function(n: number): number {
        let left = 1;
        let right = n;
        
        while (left < right) {
            // オーバーフローを避けるための中間値計算方法
            const mid = left + Math.floor((right - left) / 2);
            
            if (isBadVersion(mid)) {
                // midが悪いバージョンなら、最初の悪いバージョンはmidかそれより前
                right = mid;
            } else {
                // midが悪くないバージョンなら、最初の悪いバージョンはmidより後
                left = mid + 1;
            }
        }
        
        // 左端が最初の悪いバージョン
        return left;
    };
};