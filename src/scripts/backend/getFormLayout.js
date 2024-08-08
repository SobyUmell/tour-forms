import api from "./api"

const getFormLayout = async (formId) => {
  try {
    const response = await api.get(`forms/${formId}/layout`);
    return response;
  } catch (error) {
    throw new Error('Failed to get the form layout!');
  }
}

export default getFormLayout