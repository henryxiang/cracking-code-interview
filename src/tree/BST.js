import Node from './Node';

class BST {
  constructor(root) {
    this.root = root || null;
  }

  put(key, value) {
    this.root = this._put(key, value, this.root);
  }

  _put(key, value, node) {
    if (!node) {
      return new Node(key, value);
    }
    if (key < node.key) {
      node.left = this._put(key, value, node.left);
    } else if (key > node.key) {
      node.right = this._put(key, value, node.right);
    } else {
      node.value = value;
    }
    return node;
  }
  
  toString() {
    return JSON.stringify(this.root, null, 2);
  }
}

export default BST;
