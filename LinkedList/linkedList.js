class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(array);
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.length || index >= this.length) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);

    let leaderNode = this.traverseToNode(index - 1);
    newNode.next = leaderNode.next;
    leaderNode.next = newNode;

    this.length++;
  }

  remove(index) {
    if (index === 0) {
      if (this.head.next === null) return null;
      this.head = this.head.next;
      return;
    }
    if (index > this.length) {
      return "no index found";
    }

    let nodeBeforeIndex = this.traverseToNode(index - 1);
    let unWantedNode = nodeBeforeIndex.next;

    nodeBeforeIndex.next = unWantedNode.next;
    this.length--;
  }

  traverseToNode(index) {
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentIndex != index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }
}

let myLinkedList = new LinkedList(10);

console.log("when list created");
myLinkedList.printList();

console.log("after appending 3,6");
myLinkedList.append(3);
myLinkedList.append(6);
myLinkedList.printList();

console.log("after prepending 1");
myLinkedList.prepend(1);
myLinkedList.printList();

console.log("after inserting 5 at 2nd index, 8 at 10th index");
myLinkedList.insert(5, 2);
myLinkedList.insert(8, 10);
myLinkedList.printList();

console.log("after removing the element from 2nd index");
myLinkedList.remove(2);
myLinkedList.printList();
