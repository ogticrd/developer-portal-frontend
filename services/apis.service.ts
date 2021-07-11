import { SummaryAPI } from '../models/popular-api';
import { get } from './http/http.service';

const apiUrl = 'https://developers.digital.gob.do/portal/environments/DEFAULT/';

export const getPopularApis = async (): Promise<SummaryAPI[]> => {
  const { data } = await get(`${apiUrl}apis`);
  return data.data;
};

export const getApis = async (): Promise<SummaryAPI[]> => {
  const { data } = await get(`${apiUrl}apis`);
  return data.data;
};
