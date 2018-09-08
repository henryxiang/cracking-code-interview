import BST from './BST';

test('Put nodes to BST', () => {
  const tree = new BST();
  expect(tree.root).toBe(null);

  tree.put(2,2);
  expect(tree.root.key).toBe(2);
  expect(tree.root.left).toBe(null);
  expect(tree.root.right).toBe(null);

  tree.put(1,1);
  expect(tree.root.key).toBe(2);
  expect(tree.root.left.key).toBe(1);
  expect(tree.root.right).toBe(null);

  tree.put(4,4);
  expect(tree.root.key).toBe(2);
  expect(tree.root.left.key).toBe(1);
  expect(tree.root.right.key).toBe(4);

  tree.put(3,3);
  expect(tree.root.key).toBe(2);
  expect(tree.root.left.key).toBe(1);
  expect(tree.root.right.key).toBe(4);
  expect(tree.root.right.right).toBe(null);
  expect(tree.root.right.left.key).toBe(3);
});
