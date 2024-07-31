
const ImageStatic = ({widget}) => {

  return (
    <img src={widget.attributes.value} alt={'Image Widget'} style={widget.styles}/>
  );
}
 
export default ImageStatic;