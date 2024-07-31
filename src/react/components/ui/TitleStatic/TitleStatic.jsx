
const TitleStatic = ({widget}) => {
  return (
    <h1 className='TitleStatic' style={widget.styles} >
      {widget.attributes.value}
    </h1>
  );
}
 
export default TitleStatic;