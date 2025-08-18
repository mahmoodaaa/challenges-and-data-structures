const BinaryTree = require("../BinaryTree");
const BinarySearchTree = require("../BinarySearchTree");

// BinarySearchTree tests
test("BinarySearchTree should add nodes in correct order", () => {
  const bst = new BinarySearchTree();
  bst.add(10);
  bst.add(5);
  bst.add(15);
  bst.add(3);
  bst.add(7);

  expect(bst.root.data).toBe(10);
  expect(bst.root.left.data).toBe(5);
  expect(bst.root.right.data).toBe(15);
  expect(bst.root.left.left.data).toBe(3);
  expect(bst.root.left.right.data).toBe(7);
});

test("BinarySearchTree should find existing nodes with contains()", () => {
  const bst = new BinarySearchTree();
  bst.add(10);
  bst.add(5);
  bst.add(15);

  expect(bst.contains(10)).toBe(true);
  expect(bst.contains(5)).toBe(true);
  expect(bst.contains(15)).toBe(true);
  expect(bst.contains(99)).toBe(false);
});

test("BinarySearchTree should remove leaf nodes", () => {
  const bst = new BinarySearchTree();
  bst.add(10);
  bst.add(5);
  bst.add(15);
  bst.remove(5);

  expect(bst.contains(5)).toBe(false);
  expect(bst.root.left).toBeNull();
});

// BinaryTree traversal tests
const setupBinaryTree = () => {
  const tree = new BinaryTree();
  tree.root = {
    data: 1,
    left: { 
      data: 2, 
      left: { data: 4, left: null, right: null }, 
      right: { data: 5, left: null, right: null } 
    },
    right: { 
      data: 3, 
      left: { data: 6, left: null, right: null }, 
      right: { data: 7, left: null, right: null } 
    }
  };
  return tree;
};

test("BinaryTree preOrder should return correct sequence", () => {
  const tree = setupBinaryTree();
  expect(tree.PreOrder()).toEqual([1, 2, 4, 5, 3, 6, 7]);
});

test("BinaryTree inOrder should return correct sequence", () => {
  const tree = setupBinaryTree();
  expect(tree.InOrder()).toEqual([4, 2, 5, 1, 6, 3, 7]);
});

test("BinaryTree postOrder should return correct sequence", () => {
  const tree = setupBinaryTree();
  expect(tree.PostOrder()).toEqual([4, 5, 2, 6, 7, 3, 1]);
});