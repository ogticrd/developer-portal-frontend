export interface Subscription {
  id: string
  api: string
  application: string
  plan: string
  request: string
  created_at: Date
  subscribed_by: string
  status: string
}
