const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 function Node(value) {
  return {
    value, next: null, prev: null
  }
}
const chainMaker = {
  getLength() {
    let pointer = this.root
    let len = 0
    while (pointer != null) {
      len++
      pointer = pointer.next
    }
    return len
  },
  addLink( value ) {
    if (this.root == null) {
      this.root = Node(value)
      return this;
    }

    let ponter = this.root
    let prev

    while (ponter != null) {
      [prev, ponter] = [ponter, ponter.next]
    }

    prev.next = Node(value)
    prev.next.prev = prev

    return this
    // remove line with error and write your code here
  },
  removeLink( position ) {
    if (!(typeof position == 'number') || position < 1 || position > this.getLength()) {
      this.root = null
      throw Error('You can\'t remove incorrect link!')
    }
    position--
    let pointer = this.root
    while (position > 0 && pointer != null) {
      pointer = pointer.next
      position--
    }
    if (this.root == pointer) {
      this.root = pointer.next
    }
    if (pointer.prev != null) {
      pointer.prev.next = pointer.next
    }
    if (pointer.next != null) {
      pointer.next.prev = pointer.prev
    }
    return this
    // remove line with error and write your code here
  },
  reverseChain() {
    if (this.root == null) {
      return this
    }
    let pointer = this.root
    let prevNode = pointer
    while (pointer != null) {
      const {prev, next} = pointer
      pointer.prev = next
      pointer.next = prev
      prevNode = pointer
      pointer = next
    }
    this.root = prevNode
    return this
    // remove line with error and write your code here
  },
  finishChain() {
    let parts = []
    let pointer = this.root;
    while (pointer != null) {
      parts.push(`( ${pointer.value} )`)
      pointer = pointer.next;
    }
    this.root = null
    const result = parts.join('~~')
    return result
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
