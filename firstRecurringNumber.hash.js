// return first recurring number/character

// Given array = [2,5,1,2,3,5,1,4]
// it should return 2

// Giver an array = [2,1,1,2,3,5,1,2,4]
// it should return 1

// Given an array = [2,3,4,5]
// it should return undefined

// brute force
function firstRecurring(arr) {
  if (!arr || !arr.length) return undefined;
  smallIndexOfJ = Infinity; // storing the smallest index is important

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        if (j < smallIndexOfJ) {
          smallIndexOfJ = j;
        }
      }
    }
  }
  return arr[smallIndexOfJ] ? arr[smallIndexOfJ] : undefined;
}
// time complexity o(n^2)

console.log("solution with brute force method");
console.log(firstRecurring([1, 3, 3, 1]));

// hashtable
function firstRecurring2(arr) {
  if (!arr || !arr.length) return undefined;

  let hashObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (hashObj[arr[i]]) {
      return arr[i];
    }
    hashObj[arr[i]] = true;
  }
  return undefined;
}
// time complexity o(n)
// space complexity 0(n)

console.log("solution with hash table");
console.log(firstRecurring2(["a", "b", "c", "d", "d"]));
console.log(firstRecurring2([1, 3, 3, 1]));
