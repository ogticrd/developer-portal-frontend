import { ApiPage } from './api-pages';

export interface ApiPagesResponse {
  swagger: ApiPage | undefined;
  markdown: ApiPage | undefined;
}
