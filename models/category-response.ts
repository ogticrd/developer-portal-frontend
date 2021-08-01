export interface CategoryResponse {
    data:     Category[];
    metadata: Metadata;
}

export interface Category {
    id:          string;
    name:        string;
    description: string;
    order:       number;
    total_apis:  number;
    _links:      Links;
}

export interface Links {
    self:            string;
    highlighted_api: string;
    picture:         string;
    background:      string;
}

export interface Metadata {
    data: Data;
}

export interface Data {
    total: number;
}
