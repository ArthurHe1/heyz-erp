import { getToken } from './getCookies'

const baseURL = `${process.env.NEXT_PUBLIC_APP_URL}/api`

interface IOptions extends RequestInit {
  params?: Record<string, any>
}

const customClientFetch = async (url: string, options: IOptions = {}) => {
  if (options.params) {
    const params = new URLSearchParams(options.params).toString()
    url = `${url}?${params}`
  }

  let token: any = ''
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token')
  } else {
    token = getToken()
  }

  const res = await fetch(`${baseURL}${url}`, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: token || ''
    }
  })

  if (res.ok) {
    return res.json()
  } else {
    return { error: res.statusText }
  }
}

export default customClientFetch
