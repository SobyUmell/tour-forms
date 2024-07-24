import obj from "../../../../constants/boilerplate";
import convertToJSX from "../../../../scripts/helpers/convertToJSX";

const FormView = () => {

  return ( 
    <>
      {convertToJSX(obj.root)}
    </>
  );
}
 
export default FormView
