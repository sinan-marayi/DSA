// reverse the string
// if string is "hello"
// output should be "olleh"

function reverseStr(str) {
  if (!str || typeof str !== "string") {
    console.log("Enter a valid string");
    return;
  }

  // loop through the string backward
  reversed = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }

  console.log(reversed.join(""));
}
// time complexity ---> o(n)
// space complexity ---> o(n)

function reverseStr2(str) {
  return str.split("").reverse().join("");
}

function reverseStr3(str) {
  return [...str].reverse().join("");
}

console.log("first function");
reverseStr("hello");

console.log("second function");
console.log(reverseStr2("hello world"));

console.log("third function");
console.log(reverseStr3("hi, how are you"));
