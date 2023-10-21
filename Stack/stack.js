// stack using linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return;
    }
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }
  pop() {
    if (this.top === null) {
      return;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
  }
  peek() {
    return this.top;
  }
  isEmpty() {
    return this.length === 0 ? true : false;
  }
}

let myStack = new Stack();

myStack.push("google");
myStack.push("udemy");
myStack.push("youtube");

myStack.pop();
myStack.pop();

console.log(myStack.peek());

console.log("is the stack empty : ", myStack.isEmpty());

console.log(myStack);
