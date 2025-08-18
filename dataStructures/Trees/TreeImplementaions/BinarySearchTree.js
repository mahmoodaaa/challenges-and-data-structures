//Binary Search Tree
const TNode = require("./TNode");
const BinaryTree = require("./BinaryTree");

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(data) {
    const newNode = new TNode(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (data <= current.data) {
        if (current.left === null) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  contains(data) {
    let current = this.root;
    while (current !== null) {
      if (current.data === data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    try {
      this.root = this.removeNode(this.root, data);
    } catch (error) {
      console.error(`Error removing data ${data}:`, error);
    }
  }

  removeNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      // Case 1: No children
      if (!node.left && !node.right) {
        return null;
      }
      // Case 2: One child
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      // Case 3: Two children
      let tempNode = this.findMin(node.right);
      node.data = tempNode.data;
      node.right = this.removeNode(node.right, tempNode.data);
      return node;
    }
  }

  findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
}

module.exports = BinarySearchTree;