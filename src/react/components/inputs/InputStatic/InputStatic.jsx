
const InputStatic = ({widget}) => {

  return (
    <input type="text" placeholder={widget.attributes.placeholder} style={widget.styles} />
  );
}
 
export default InputStatic;