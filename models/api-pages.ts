export interface APIPagesDTO {
  data: ApiPage[];
  metadata: Metadata;
}

export interface ApiPage {
  id: string;
  name: string;
  type: string;
  order: number;
  updated_at: Date;
  _links: Links;
}

export interface Links {
  self: string;
  content: string;
  parent: string;
}

export interface Metadata {
  data: Data;
}

export interface Data {
  total: number;
}
