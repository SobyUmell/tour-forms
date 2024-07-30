import { setCurrentWidget } from "../../../../store/slices/WidgetSlice";
import { useDispatch, useSelector } from "react-redux";

import './TitleWidget.scss'

const TitleWidget = ({widget}) => {

  const dispatch = useDispatch();
  const current = useSelector(state => state.widgets.current);
  
  const handleOnClick = (e) => {
    e.stopPropagation();
    dispatch(setCurrentWidget(widget.name));
  } 



  return (
    <h1 className={`TitleWidget ${widget.name === current ? 'focused' : ''}`} style={widget.styles} onClick={handleOnClick}>
      {widget.attributes.value ? widget.attributes.value : 'Title'}
    </h1>
  );
}
 
export default TitleWidget;