import AutoStatic from "../../react/components/containers/AutoStatic";

const getName = (key) => {
  let temp = key.split('_');
  return temp[0];
}

const convertToJSX = (node) => {
  if (!node) return null;
  const { children } = node;
  
  const childElements = children
    ? Object.entries(children).map(([key, body]) => (
        <AutoStatic widget={body}>
          {convertToJSX(body)}
        </AutoStatic>
      ))
    : null;

  return (
    <>
      {childElements}
    </>
  );
};

export default convertToJSX;