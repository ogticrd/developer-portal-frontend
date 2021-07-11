export interface PopularAPI {
    id:             string;
    name:           string;
    version:        string;
    description:    string;
    draft:          boolean;
    running:        boolean;
    labels:         any[];
    owner:          Owner;
    updated_at:     Date;
    categories:     any[];
    rating_summary: RatingSummary;
    _links:         Links;
    public:         boolean;
}

export interface Links {
    self:       string;
    links:      string;
    metrics:    string;
    pages:      string;
    picture:    string;
    background: string;
    plans:      string;
    ratings:    string;
}

export interface Owner {
    id:               string;
    display_name:     string;
    email:            string;
    editable_profile: boolean;
}

export interface RatingSummary {
    count: number;
}
