import api from './api';

export const index = async (token) => {
  try {
    const response = await api.get('api/trash', {}, {headers: {token}});
    console.log(response);
    if (response?.status === 200) {
      return response.data;
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
