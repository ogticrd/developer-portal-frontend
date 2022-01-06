import { SummaryAPI } from '../models/summary-api'

export const normalizeLinks = (apis: SummaryAPI[]) => {
  if (!apis) return

  const result: SummaryAPI[] = []
  for (const api of apis) {
    for (const key in api?._links || []) {
      const url = api._links[key]
      api._links[key] = url.replace(':80/', '/')
    }
    result.push(api)
  }

  return result
}
