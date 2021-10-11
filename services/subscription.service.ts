import { SubscriptionResponse } from '../models/reponses/subscription-response'
import { ApiSubscribeRequest } from '../models/requests/api-subscribe.request'
import { Subscription } from '../models/subscription'
import { getApiPlans } from './apis.service'
import { getApplications } from './application.service'
import { get, post } from './http/http.service'

export const createSubscription = async (api: string, comment?: string) => {
  const [application] = await getApplications(true)
  const [plan] = await getApiPlans(api)

  const input: ApiSubscribeRequest = {
    application: application.id,
    plan: plan.id,
    general_conditions_accepted: true,
    request: comment,
  }

  const { data } = await post('subscriptions', input)
  return data
}

export const getSubscriptions = async (): Promise<SubscriptionResponse> => {
  const { data } = await get(
    `subscriptions?statuses=ACCEPTED&statuses=PAUSED&statuses=PENDING`,
  )
  return data
}
