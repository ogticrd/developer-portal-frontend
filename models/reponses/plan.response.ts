export interface PlanResponse {
  data: Plan[]
  metadata: Metadata
}

export interface Plan {
  id: string
  name: string
  security: string
  description: string
  characteristics: any[]
  validation: string
  order: number
  comment_required: boolean
}

export interface Metadata {
  data: Data
}

export interface Data {
  total: number
}
