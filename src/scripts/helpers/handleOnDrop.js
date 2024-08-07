import { addWidget } from "../../store/slices/WidgetSlice";
import chooseGroups from "./chooseGroups";
import chooseStyles from "./chooseStyles";
import { increment } from "../../store/slices/CountSlice";
import store from "../../store/store";

const handleOnDrop = (e, parent, dispatch) => {
  e.stopPropagation();
  const name = e.dataTransfer.getData('child_key');
  const type = name.split('_')[0];
  const widget = {
    name,
    parent,
    styles: {...chooseStyles(name)},
    attributes: {
      groups: chooseGroups(name),
      ...(type === 'INPUT' && { placeholder: 'input', isInput: true, number: store.getState().count.value}),
    },
    children: [],
  }
  dispatch(addWidget(widget));
  if (type === 'INPUT') dispatch(increment());
}

export default handleOnDrop;