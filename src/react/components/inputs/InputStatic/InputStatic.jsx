import { useDispatch, useSelector } from "react-redux";
import { updateAnswer } from "../../../../store/slices/AnswerSlice";
const InputStatic = ({widget}) => {
  const list = useSelector(state => state.answers.list);
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    dispatch(updateAnswer({
      name: widget.name,
      number: widget.attributes.number,
      text: e.target.value,
    }))
  }

  return (
    <input type="text" placeholder={widget.attributes.placeholder} style={widget.styles} value={list[widget.name].text} onChange={handleOnChange} />
  );
}
 
export default InputStatic;