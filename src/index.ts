// LeetCode問題を解くためのTypeScriptサンプルコード

class Solution {
  // LeetCode問題: 2つの数字の和を返す関数
  twoSum(nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map();
    
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      
      if (map.has(complement)) {
        return [map.get(complement)!, i];
      }
      
      map.set(nums[i], i);
    }
    
    return []; // 解がない場合（LeetCodeでは常に解があると保証されることが多い）
  }
}

// 実行例
const solution = new Solution();
const nums = [2, 7, 11, 15];
const target = 9;
const result = solution.twoSum(nums, target);

console.log(`Input: nums = [${nums}], target = ${target}`);
console.log(`Output: [${result}]`);
console.log(`説明: nums[${result[0]}] + nums[${result[1]}] = ${nums[result[0]]} + ${nums[result[1]]} = ${target}`);