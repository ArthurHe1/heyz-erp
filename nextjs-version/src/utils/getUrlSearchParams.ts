import { NextRequest } from 'next/server'

export const getUrlSearchParams = (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams
  const params: any = {}
  searchParams.forEach((value, key) => {
    params[key] = value
  })
  return params
}
