
import { useDispatch, useSelector } from "react-redux";
import { setCurrentWidget } from "../../../../store/slices/WidgetSlice";

const SubmitWidget = ({widget}) => {
  const current = useSelector(state => state.widgets.current);
  const dispatch = useDispatch();
  const handleOnClick = (e) => {
    e.stopPropagation();
    dispatch(setCurrentWidget(widget.name));
  }
  return (
    <button className={`SubmitWidget ${widget.name === current ? 'focused' : ''}`} onClick={handleOnClick} style={widget.styles}>
      { widget.attributes.value || 'Submit' }
    </button>
  );
}
 
export default SubmitWidget;