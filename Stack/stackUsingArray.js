class Stack {
  constructor() {
    this.array = [];
  }

  peek(){
    return this.array[this.array.length -1]
  }

  push(value){
    this.array.push(value)
    return Stack
  }

  pop(){
    this.array.pop()
  }
}


let myStack = new Stack()

myStack.push('google')
myStack.push('udemy')
myStack.push('youtube')

myStack.pop()
myStack.pop()

console.log('last item is ' , myStack.peek())

console.log(myStack)