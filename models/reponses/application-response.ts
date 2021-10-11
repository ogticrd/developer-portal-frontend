export interface ApplicationResponse {
  data: Application[]
  metadata: Metadata
  links: Links
}

export interface Application {
  id: string
  name: string
  description: string
  applicationType: string
  hasClientId: boolean
  owner: Owner
  created_at: Date
  updated_at: Date
  _links: ApplicationLinks
}

export interface ApplicationLinks {
  self: string
  members: string
  notifications: string
  picture: string
  background: string
}

export interface Owner {
  id: string
  first_name: string
  last_name: string
  display_name: string
  email: string
  editable_profile: boolean
  _links: OwnerLinks
}

export interface OwnerLinks {
  self: string
  avatar: string
  notifications: string
}

export interface Links {
  self: string
}

export interface Metadata {
  pagination: Pagination
  data: Data
}

export interface Data {
  total: number
}

export interface Pagination {
  total: number
  size: number
  last: number
  total_pages: number
  current_page: number
  first: number
}
