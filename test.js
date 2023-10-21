var removeDuplicates = function (nums) {
  outputArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      outputArray.push(nums[0]);
      continue;
    }
    if (!outputArray.includes(nums[i])) {
      outputArray.push(nums[i]);
    }
  }
  return outputArray;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
