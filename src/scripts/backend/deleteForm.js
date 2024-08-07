import api from "./api";
const deleteForm = async (formId) => {
  try {
    const response = await api.delete(`/forms/${formId}`);
    return response;
  } catch (error) {
    throw new Error('Failed to delete the form!');
  }
}

export default deleteForm;