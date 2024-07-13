import { ofetch } from 'ofetch'
import { createDiscreteApi } from 'naive-ui'

let api: ReturnType<typeof ofetch.create> | null = null
const { notification } = createDiscreteApi(
  ['notification']
)

export const useApi = () => {
  if (api === null) {
    api = ofetch.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      onResponseError(ctx) {
        notification.error({
          title: 'Error',
          content: ctx.response.statusText,
          duration: 2000
        })
      }
    })
  }

  return api
}
