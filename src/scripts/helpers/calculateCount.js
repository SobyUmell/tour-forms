import store from "../../store/store";

const calculateCount = () => {
  const inputs = Object.values(store.getState().widgets.all).filter(widget => {
    return (widget.attributes.isInput) ? true : false;
  })
  const next = inputs.reduce((prev, current) => (prev.number > current.number) ? prev.number : current.number, 0) + 1;
  return next;
}

export default calculateCount;