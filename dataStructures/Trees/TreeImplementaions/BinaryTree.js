//BinarTree.js
const TNode = require("./TNode");

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // root - left - right
  PreOrder(node = this.root, result = []) {
    try {
      if (node !== null) {
        result.push(node.data);
        this.PreOrder(node.left, result);
        this.PreOrder(node.right, result);
      }
      return result;
    } catch (err) {
      console.error("Error in preOrder:", err.message);
      return [];
    }
  }

  // left - root - right
  InOrder(node = this.root, result = []) {
    try {
      if (node !== null) {
        this.InOrder(node.left, result);
        result.push(node.data);
        this.InOrder(node.right, result);
      }
      return result;
    } catch (err) {
      console.error("Error in InOrder:", err.message);
      return [];
    }
  }

  // left - right - root
  PostOrder(node = this.root, result = []) {
    try {
      if (node !== null) {
        this.PostOrder(node.left, result);
        this.PostOrder(node.right, result);
        result.push(node.data);
      }
      return result;
    } catch (err) {
      console.error("Error in postOrder:", err.message);
      return [];
    }
  }

  // Print the tree 
  printTree(node = this.root, space = 0, levelSpace = 5) {
    if (node === null) return;

    space += levelSpace;
    this.printTree(node.right, space);
    console.log(" ".repeat(space - levelSpace) + `${node.data}`);
    this.printTree(node.left, space);
  }
}

module.exports = BinaryTree;
