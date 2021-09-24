export interface User {
  id: string
  display_name?: string
  first_name: string
  last_name: string
  organization: string
  editable_profile?: boolean
  email: string
  permissions?: Permissions
  _links?: Links
}

export interface Links {
  self: string
  avatar: string
  notifications: string
}

export interface Permissions {
  APPLICATION: string[]
  USER: string[]
}
