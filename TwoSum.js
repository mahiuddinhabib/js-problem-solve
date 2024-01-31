/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

const findTwoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map[diff] !== undefined) {
      console.log(`[${map[diff]}, ${i}]`);
      return;
    }
    map[nums[i]] = i;
  }
  console.log("Not found");
};

const nums = [2, 7, 11, 15];
const target = 9;
findTwoSum(nums, target);
