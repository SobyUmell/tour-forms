import api from "./api";

const postAnswers = async (formId, obj_list) => {
  try {
    const list = Object.values(obj_list);
    const response = await api.post('/answers', {formId, list});
    return response;
  } catch (error) {
    throw new Error('Failed to upload the form!');
  }
}

export default postAnswers;