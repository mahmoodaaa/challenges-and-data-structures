const Node = require('../ClassNode');
const Stack = require('../Stack');

class DeleteMiddleStack {
    static delete(stack) {
        if (!stack || stack.isEmpty()) {
            throw new Error('Cannot delete middle element from empty stack');
        }
        
        const size = stack.size();
        if (size === 1) {
            stack.pop();
            return;
        }
        
        // For even number of elements, we want to remove the first middle element
        // For example, in stack [1, 2, 3, 4], we want to remove 2 (index 1)
        const mid = Math.floor((size - 1) / 2);
        
        // Use a temporary stack to store elements
        const tempStack = new Stack();
        let count = 0;
        
        // Move elements to temp stack until we reach the middle
        while (count <= mid) {
            const element = stack.pop();
            if (count !== mid) {
                tempStack.push(element);
            }
            count++;
        }
        
        // Move elements back to original stack
        while (!tempStack.isEmpty()) {
            stack.push(tempStack.pop());
        }
    }
}

module.exports = DeleteMiddleStack;