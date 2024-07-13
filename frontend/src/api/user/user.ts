import { useApi } from '@/api'
import { transformPhoneToNumber } from '@/helpers'
import type { IFetchUsersListRequest, IUserItem } from '@/api/user/user.types'

const api = useApi()

export const fetchUsersList = (query?: IFetchUsersListRequest) => {
  return api<IUserItem[]>('/user/', {
    method: 'GET',
    query: {
      email: query?.email,
      number: query?.number && transformPhoneToNumber(query.number)
    }
  })
}
