import { useDispatch, useSelector } from "react-redux";
import { sendAnswers } from "../../../../store/slices/AnswerSlice";
const SubmitStatic = ({widget}) => {

  return (
    <button type="submit" style={widget.styles}>
      { widget.attributes.value || 'Submit' }
    </button>
  );
}
 
export default SubmitStatic;