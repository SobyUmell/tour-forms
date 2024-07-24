import { addWidget } from "../../store/slices/WidgetSlice";
import chooseStyles from "./chooseStyles";
const handleOnDrop = (e, parent, dispatch) => {
  e.stopPropagation();
  const name = e.dataTransfer.getData('child_key');
  const widget = {
    name,
    parent,
    styles: {...chooseStyles(name)},
    attributes: {
    },
    children: [],
  }
  dispatch(addWidget(widget));
}

export default handleOnDrop;