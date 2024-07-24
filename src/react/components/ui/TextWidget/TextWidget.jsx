import { useDispatch } from "react-redux";
import { setCurrentWidget } from "../../../../store/slices/WidgetSlice";

const TextWidget = ({widget}) => {

  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    e.stopPropagation();
    dispatch(setCurrentWidget(widget));
  } 

  return (
    <div className="TextWidget" style={widget.styles} onClick={handleOnClick} >
      {widget.attributes.value ? widget.attributes.value : 'Title'}
    </div>
  );
}
 
export default TextWidget;