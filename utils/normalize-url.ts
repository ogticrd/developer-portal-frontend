import { SummaryAPI } from '../models/summary-api'

export const normalizeLinks = (apis: SummaryAPI[]) => {
  if (!apis) return

  const result: SummaryAPI[] = []
  for (const api of apis) {
    for (const key in api?._links || []) {
      const url = api._links[key]
      api._links[key] = normalizeUrl(url)
    }
    result.push(api)
  }

  return result
}

export const normalizeUrl = (url: string) => {
  return url.replace(':80/', '/')
}
