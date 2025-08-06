export class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree {
  root: TreeNode | null = null;

  constructor(root: TreeNode) {
    this.root = root;
  }

  inorderTraversal(node: TreeNode | null = this.root, result: number[] = []): number[] {
    // left -> root -> right
    if (node) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }

  preorderTraversal(node: TreeNode | null = this.root, result: number[] = []): number[] {
    //  root -> left -> right
    if (node) {
      result.push(node.value);
      this.preorderTraversal(node.left, result);
      this.preorderTraversal(node.right, result);
    }
    return result;
  }

  postorderTraversal(node: TreeNode | null = this.root, result: number[] = []): number[] {
    // left -> right -> root
    if (node) {
      this.postorderTraversal(node.left, result);
      this.postorderTraversal(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  getDiameter(): number {
    let maxDiameter = 0;

    const getHeight = (node: TreeNode | null): number => {
      if (!node) return 0;

      const leftHeight = getHeight(node.left);
      const rightHeight = getHeight(node.right);
      const localDiameter = leftHeight + rightHeight;

      maxDiameter = Math.max(maxDiameter, localDiameter);

      return Math.max(leftHeight, rightHeight) + 1;
    };

    getHeight(this.root);
    return maxDiameter;
  }
}
