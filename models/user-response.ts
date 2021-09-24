export interface UserResponse {
  id: string
  display_name: string
  editable_profile: boolean
  permissions: Permissions
  _links: Links
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
