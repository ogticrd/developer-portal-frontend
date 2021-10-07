export interface ApiSubscribeRequest {
  application: string
  plan: string
  request?: string
  general_conditions_accepted: boolean
  general_conditions_content_revision?: GeneralConditionsContent
}

export interface GeneralConditionsContent {
  pageId: string
  revision: number
}
