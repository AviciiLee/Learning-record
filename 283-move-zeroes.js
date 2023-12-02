/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0 // 记录非0元素位置
  for (let i = 0; i < nums.length; ++i) {
    // 遍历数组
    if (nums[i] !== 0) {
      // 如果是非0元素的话
      nums[j] = nums[i] // 移动到非零元素的位置
      if (i !== j) {
        // i!== j, 说明j的位置是0
        nums[i] = 0 // 把原先非0元素的位置改为0
      }
      j++ // 下一个非0元素的位置
    }
  }
}
