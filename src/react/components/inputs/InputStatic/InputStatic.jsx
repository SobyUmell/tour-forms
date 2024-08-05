import { setAnswer } from "../../../../store/slices/AnswerSlice";
import { useDispatch, useSelector } from "react-redux";

const InputStatic = ({widget}) => {
  const answers = useSelector(state => state.answers.list);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setAnswer({
      name: widget.name,
      value: e.target.value,
    }))
  }
  return (
    <input type="text" placeholder={widget.attributes.placeholder} style={widget.styles} value={answers[widget.name] && answers[widget.name].value} onChange={handleChange} />
  );
}
 
export default InputStatic;