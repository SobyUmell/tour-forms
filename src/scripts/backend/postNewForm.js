import api from "./api";
import store from "../../store/store";
const postNewForm = async (obj_layout) => {
  try {
    const layout = Object.values(obj_layout).map(widget => {
      let copy_widget = {...widget};
      delete copy_widget['children'];
      return copy_widget;
    })
    const questions = layout.filter(widget => {
      return widget.attributes.isInput ? true : false;
    }).map(input => {
      return {
        number: input.attributes.number,
        text: input.attributes.placeholder
      }
    })
    const name = store.getState().widgets.name;
    const response = await api.post('/forms', {layout, questions, name});
    return response;
  } catch (error) {
    throw new Error('Failed to upload the form!');
  }
}

export default postNewForm;