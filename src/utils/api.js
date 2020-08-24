import axios from "axios";

const baseUrl = "https://navedex-api.herokuapp.com/v1";

export const login = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/users/login`, body);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const createNaver = async (body, token) => {
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const result = await axios.post(`${baseUrl}/navers`, body, axiosConfig);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getNavers = async (token) => {
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const result = await axios.get(`${baseUrl}/navers`, axiosConfig);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteNaver = async (id, token) => {
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    await axios.delete(`${baseUrl}/navers/${id}`, axiosConfig);
    console.log("Usuário deletado com sucesso!");
  } catch (error) {
    console.log(error);
  }
};

export const fetchDetail = async (id, token) => {
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const result = await axios.get(`${baseUrl}/navers/${id}`, axiosConfig);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateNaver = async (id, token, body) => {
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,      
    },
  };
  try {
    console.log(body)
    await axios.put(`${baseUrl}/navers/${id}`, body, axiosConfig);
  } catch (error) {
    console.log(error);
  }
};
