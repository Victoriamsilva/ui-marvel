import api from './api';

export const findPaginatedCharacters = async (page: number = 1, limit: number = 20) => {
  const { data } = await api.get(`/characters?offset=${page}&limit=${limit}`);
  return data;
};
