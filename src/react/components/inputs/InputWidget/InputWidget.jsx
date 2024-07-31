import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentWidget } from "../../../../store/slices/WidgetSlice";

import './InputWidget.scss';

const InputWidget = ({widget}) => {
  const current = useSelector(state => state.widgets.current);
  const dispatch = useDispatch();
  const handleOnClick = (e) => {
    e.stopPropagation();
    dispatch(setCurrentWidget(widget.name));
  }
  return (
    <input className={`InputWidget ${widget.name === current ? 'focused' : ''}`} onClick={handleOnClick} type="text" placeholder={widget.attributes.placeholder} style={widget.styles} />
  );
}
 
export default InputWidget;