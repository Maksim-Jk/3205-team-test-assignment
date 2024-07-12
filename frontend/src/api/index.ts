import { ofetch } from 'ofetch'

let api: ReturnType<typeof ofetch.create> | null = null

export const useApi = () => {
  if (api === null) {
    api = ofetch.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      onResponse(cts) {
        if (cts.response.status >= 200 && cts.response.status < 300 && cts.response._data.message) {
          alert(cts.response._data.message)
        }
      },
      onResponseError(ctx) {
        if (ctx.response._data.detail) {
          alert(ctx.response._data.detail)
        }
      }
    })
  }

  return api
}
