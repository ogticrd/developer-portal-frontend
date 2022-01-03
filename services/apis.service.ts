import { APIPagesDTO } from '../models/api-pages'
import { Category, CategoryResponse } from '../models/category-response'
import { ApiPagesResponse } from '../models/reponses/api-pages-response'
import { Plan, PlanResponse } from '../models/reponses/plan.response'
import { SummaryAPI } from '../models/summary-api'
import { normalizeLinks } from '../utils/normalize-url'
import { get, post } from './http/http.service'

export const getPopularApis = async (): Promise<SummaryAPI[]> => {
  const { data } = await get(`apis?size=3`)
  return normalizeLinks(data?.data || [])
}

export const getApis = async (): Promise<SummaryAPI[]> => {
  try {
    const { data } = await get(`apis`)

    return normalizeLinks(data?.data || [])
  } catch (e) {
    return []
  }
}

export const getApiDetails = async (id: string): Promise<SummaryAPI> => {
  const { data } = await get(`apis/${id}`)
  return normalizeLinks([data] || [])[0]
}

export const getApiPlans = async (id: string): Promise<Plan[]> => {
  const { data }: { data: PlanResponse } = await get(`apis/${id}/plans`)
  return data.data
}

export const searchApi = async (search: string): Promise<SummaryAPI[]> => {
  try {
    const { data } = await post(`apis/_search?size=${5}&q=${search}`)
    return normalizeLinks(data?.data || [])
  } catch (error) {
    return []
  }
}

export const getPages = async (id: string): Promise<ApiPagesResponse> => {
  const { data }: { data: APIPagesDTO } = await get(
    `apis/${id}/pages?size=${-1}&homepage=${false}`,
  )

  const markdown = data?.data.find((page) => page.type === 'MARKDOWN')
  const swagger = data?.data.find((page) => page.type === 'SWAGGER')
  return { markdown, swagger }
}

export const getPageContent = async (url: string): Promise<string> => {
  url = url.split('DEFAULT/')[1]

  const { data }: { data: string } = await get(url)
  return data || ''
}

export const getApiCategories = async (): Promise<Category[]> => {
  const { data }: { data: CategoryResponse } = await get(`categories?size=-1`)
  return data?.data || []
}

export const getApisByCategory = async (
  category: string,
): Promise<SummaryAPI[]> => {
  try {
    const { data } = await get(`apis?category=${category}`)
    return normalizeLinks(data?.data || [])
  } catch (error) {
    console.error(error)
    return []
  }
}
