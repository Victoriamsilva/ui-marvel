import api from './api';

export const findPaginatedCharacters = async ({ page = 20, search }: { page: number; search?: string }) => {
  const params = new URLSearchParams(api.defaults.params as URLSearchParams);
  params.append('offset', page.toString());
  params.append('limit', '20');

  if (search) {
    params.append('nameStartsWith', search);
  }

  const { data } = await api.get(`/characters`, {
    params,
  });
  return data;
};
