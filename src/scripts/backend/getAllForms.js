import api from "./api";
const getAllForms = async () => {
  try {
    const response = await api.get('/forms');
    return response;
  } catch (error) {
    throw new Error('Failed to load the forms!');
  }
}

export default getAllForms;