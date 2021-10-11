import {
  Application,
  ApplicationResponse,
} from '../models/reponses/application-response'
import { get } from './http/http.service'

export const getApplications = async (
  forSubscription: boolean,
): Promise<Application[]> => {
  const { data }: { data: ApplicationResponse } = await get(
    `applications?&forSubscription=${forSubscription}`,
  )
  return data?.data
}
