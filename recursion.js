const recursion = function treeToArray(tree) {
  const array = [];
  const start = function startRecursion(treeNode, depth) {
    if (!array[depth]) array[depth] = [];
    array[depth].push(treeNode.value);
    const innerDepth = depth + 1;
    if (treeNode.left) {
      startRecursion(treeNode.left, innerDepth);
    }
    if (treeNode.right) {
      startRecursion(treeNode.right, innerDepth);
    }
  };
  start(tree, 0);
  return array;
};
