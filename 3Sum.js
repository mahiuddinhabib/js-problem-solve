function threeSum(nums) {
  let ans = [];

  if (nums.length < 3) return ans;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i - 1] !== nums[i]) {
      let low = i + 1;
      let high = nums.length - 1;
      let sum = -nums[i];

      while (low < high) {
        if (nums[low] + nums[high] === sum) {
          ans.push([nums[i], nums[low], nums[high]]);

          while (low < high && nums[low] === nums[low + 1]) {
            low++;
          }

          while (low < high && nums[high] === nums[high - 1]) {
            high--;
          }

          low++;
          high--;
        } else if (nums[low] + nums[high] < sum) {
          low++;
        } else {
          high--;
        }
      }
    }
  }

  return ans;
}

// Example usage:
let nums1 = [-1, 0, 1, 2, -1, -4];
let nums2 = [];
let nums3 = [0];

console.log(threeSum(nums1)); // Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum(nums2)); // Output: []
console.log(threeSum(nums3)); // Output: []
