// find out the element in one array is exist in another array
// if exist return true , otherwise return false

function isExist(arr1, arr2) {
  // loop through both arrays and compare the values
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

// time complexity ---> o(n*m)
// space complexity ---> o(1)

function isExist2(arr1, arr2) {
  // convert first array into an object,where key is
  // each element of array
  // and value is true
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      map[arr1[i]] = true;
    }
  }

  console.log(map);
  console.log(arr2);

  //   check wheather the element of
  //   second array is present in the map obj
  //   as key
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }

  return false;
}

// time complexity ---> o(n+m)
// space complexity ---> o(n)

function isExist3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

const arrayOne = ["a", 2, 3, 4];
const arrayTwo = [6, 5, undefined];

console.log("first function");
console.log(isExist(arrayOne, arrayTwo));

console.log("second function");
console.log(isExist2(arrayOne, arrayTwo));

console.log("third function");
console.log(isExist3(arrayOne, arrayTwo));
