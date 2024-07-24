import { setCurrentWidget } from "../../../../store/slices/WidgetSlice";
import { useDispatch } from "react-redux";

import './TitleWidget.scss'

const TitleWidget = ({widget}) => {

  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    e.stopPropagation();
    dispatch(setCurrentWidget(widget));
  } 



  return (
    <h1 className="TitleWidget" style={widget.styles} onClick={handleOnClick}>
      {widget.attributes.value ? widget.attributes.value : 'Title'}
    </h1>
  );
}
 
export default TitleWidget;