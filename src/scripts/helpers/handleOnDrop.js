import { addWidget } from "../../store/slices/WidgetSlice";
import chooseGroups from "./chooseGroups";
import chooseStyles from "./chooseStyles";
const handleOnDrop = (e, parent, dispatch) => {
  e.stopPropagation();
  const name = e.dataTransfer.getData('child_key');
  const widget = {
    name,
    parent,
    styles: {...chooseStyles(name)},
    attributes: {
      groups: chooseGroups(name),
      placeholder: 'input',
    },
    children: [],
  }
  dispatch(addWidget(widget));
}

export default handleOnDrop;