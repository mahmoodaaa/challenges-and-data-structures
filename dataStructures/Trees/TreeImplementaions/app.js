const BinaryTree = require('./BinaryTree');
const BinarySearchTree = require('./BinarySearchTree');

console.log('=== Binary Tree Demo ===');
const bt = new BinaryTree();
// Manually create a binary tree
bt.root = {
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

console.log('PreOrder Traversal:', bt.PreOrder());
console.log('InOrder Traversal:', bt.InOrder());
console.log('PostOrder Traversal:', bt.PostOrder());
console.log('Tree Structure:');
bt.printTree();

console.log('\n=== Binary Search Tree Demo ===');
const bst = new BinarySearchTree();
const values = [10, 5, 15, 3, 7, 12, 17];
console.log('Adding values:', values);
values.forEach(val => bst.add(val));

console.log('Tree Structure:');
bst.printTree();

console.log('\nSearching for values:');
[7, 15, 99].forEach(val => {
  console.log(`Contains ${val}?`, bst.contains(val));
});

console.log('\nRemoving value 15:');
bst.remove(15);
console.log('Tree Structure after removal:');
bst.printTree();
console.log('InOrder traversal after removal:', bst.InOrder());