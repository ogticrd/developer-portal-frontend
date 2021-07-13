import { ApiPage, APIPagesDTO } from '../models/api-pages';
import { SummaryAPI } from '../models/popular-api';
import { get, post } from './http/http.service';

const apiUrl = 'https://developers.digital.gob.do/portal/environments/DEFAULT/';
// const apiUrl = 'http://localhost:8083/portal/environments/DEFAULT/';

export const getPopularApis = async (): Promise<SummaryAPI[]> => {
  const { data } = await get(`${apiUrl}apis`);
  return data.data;
};

export const getApis = async (): Promise<SummaryAPI[]> => {
  const { data } = await get(`${apiUrl}apis`);
  return data.data;
};

export const getApiDetails = async (id: string): Promise<SummaryAPI> => {
  const { data } = await get(`${apiUrl}apis/${id}`);
  return data;
};

export const searchApi = async (search: string): Promise<SummaryAPI[]> => {
  const { data } = await post(`${apiUrl}apis/_search?size=${5}&q=${search}`);
  return data.data;
};

export const getPages = async (id: string): Promise<ApiPage[]> => {
  const { data }: { data: APIPagesDTO } = await get(
    `${apiUrl}apis/${id}/pages?size=${-1}&homepage=${false}`
  );
  return data.data;
};

export const getPagesContent = async (
  id: string,
  idPage: string
): Promise<ApiPage[]> => {
  const { data }: { data: APIPagesDTO } = await get(
    `${apiUrl}apis/${id}/pages/${idPage}/content`
  );
  return data.data;
};
