import api from './api';

export const login = async (user) => {
  try {
    const response = await api.post('login', {}, {headers: {...user}});

    if (response?.status === 200) {
      return response.data;
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const create = async (user) => {
  try {
    console.log(user);
    const response = await api.post('/newuser', user);

    if (response?.status === 200) {
      return response.data;
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
