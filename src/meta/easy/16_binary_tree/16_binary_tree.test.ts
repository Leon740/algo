import { Test } from '@src/utils/log.ts';
import { BinaryTree, TreeNode } from './16_binary_tree.ts';

const binaryTreeRoot: TreeNode = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    value: 3,
    left: null,
    right: null
  }
};
const binaryTree = new BinaryTree(binaryTreeRoot);

export const binaryTreeTests: Test[] = [
  {
    name: 'inorder',
    expected: [4, 2, 1, 3],
    actual: binaryTree.inorderTraversal()
  },
  {
    name: 'preorder',
    expected: [1, 2, 4, 3],
    actual: binaryTree.preorderTraversal()
  },
  {
    name: 'postorder',
    expected: [4, 2, 3, 1],
    actual: binaryTree.postorderTraversal()
  }
];
