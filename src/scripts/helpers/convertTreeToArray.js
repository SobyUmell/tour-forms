
const convertTreeToArray = (tree) => {
  let result = {};

  const traverse = (node, name, parent = null) => {
    const { styles, attributes, children } = node;
    const children_names = Object.keys(children || {});

    const nodeObject = {
      name,
      parent,
      styles: styles || {},
      attributes: attributes || {},
      children: children_names,
    };

    result[name] = nodeObject;

    children_names.forEach(child => {
      traverse(children[child], child, name);
    });
  };

  Object.keys(tree).forEach(root => {
    traverse(tree[root], root);
  });

  return result;
};

export default convertTreeToArray;