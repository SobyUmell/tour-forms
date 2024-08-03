import api from "./api";
const postNewForm = async (body) => {
  try {
    const response = await api.post('/forms', body);
    return response;
  } catch (error) {
    throw new Error('Failed to load the forms!');
  }
}

export default getAllForms;