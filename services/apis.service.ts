import { PopularAPI } from '../models/pupular-api';
import { get } from './http/http.service';

const apiUrl = 'https://developers.digital.gob.do/portal/environments/DEFAULT/';

export const getPopularApis = async (): Promise<PopularAPI[]> => {
  const { data } = await get(`${apiUrl}apis`);
  return data.data;
};
