import { useApi } from '@/api'
import { transformPhoneToNumber } from '@/helpers'
import type { IFetchUserRequest, IFetchUserResponse } from '@/api/user/user.types'

const api = useApi()

export const fetchUser = (query?: IFetchUserRequest) => {
  return api<IFetchUserResponse | null>('/user/', {
    method: 'GET',
    query: {
      email: query?.email,
      number: query?.number && transformPhoneToNumber(query.number)
    }
  })
}
