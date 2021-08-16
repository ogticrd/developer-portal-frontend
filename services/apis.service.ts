import { ApiPage, APIPagesDTO } from '../models/api-pages';
import { ApiPagesResponse } from '../models/api-pages-response';
import { Category, CategoryResponse } from '../models/category-response';
import { SummaryAPI } from '../models/summary-api';
import { get, post } from './http/http.service';

const apiUrl = 'https://developers.digital.gob.do/portal/environments/DEFAULT/';
// const apiUrl = 'http://localhost:8083/portal/environments/DEFAULT/';

export const getPopularApis = async (): Promise<SummaryAPI[]> => {
  const { data } = await get(`${apiUrl}apis?size=3`);
  return (data?.data as SummaryAPI[]) || [];
};

export const getApis = async (): Promise<SummaryAPI[]> => {
  try {
    const { data } = await get(`${apiUrl}apis`);
    return data?.data || [];
  } catch (e) {
    return [];
  }
};

export const getApiDetails = async (id: string): Promise<SummaryAPI> => {
  const { data } = await get(`${apiUrl}apis/${id}`);
  return data;
};

export const searchApi = async (search: string): Promise<SummaryAPI[]> => {
  try {
    const { data } = await post(`${apiUrl}apis/_search?size=${5}&q=${search}`);
    return data?.data || [];
  } catch (error) {
    return [];
  }
};

export const getPages = async (id: string): Promise<ApiPagesResponse> => {
  const { data }: { data: APIPagesDTO } = await get(
    `${apiUrl}apis/${id}/pages?size=${-1}&homepage=${false}`
  );

  const markdown = data?.data.find((page) => page.type === 'MARKDOWN');
  const swagger = data?.data.find((page) => page.type === 'SWAGGER');
  return { markdown, swagger };
};

export const getPageContent = async (url: string): Promise<string> => {
  const { data }: { data: string } = await get(url);
  return data || '';
};

export const getApiCategories = async (): Promise<Category[]> => {
  const { data }: { data: CategoryResponse } = await get(
    `${apiUrl}categories?size=-1`
  );
  return data?.data || [];
};

export const getApisByCategory = async (
  category: string
): Promise<SummaryAPI[]> => {
  try {
    const { data } = await get(`${apiUrl}apis?category=${category}`);
    return (data?.data as SummaryAPI[]) || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
