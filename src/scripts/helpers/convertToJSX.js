const getName = (key) => {
  let temp = key.split('_');
  return temp[0];
}

const convertToJSX = (node) => {
  if (!node) return null;

  const { styles, children } = node;
  
  const childElements = children
    ? Object.entries(children).map(([key, child]) => (
        <div className={`${getName(key)}`} key={key} style={child.styles}>
          {convertToJSX(child)}
        </div>
      ))
    : null;

  return (
    <>
      {childElements}
    </>
  );
};

export default convertToJSX;