import { useApi } from '@/api'
import type { ApiResponse } from '@/api/index.types'
import type { IFetchUsersListRequest } from '@/api/form/form.types'
import { transformPhoneToNumber } from '@/helpers'

const api = useApi()

export const fetchUsersList = (query?: IFetchUsersListRequest) => {
  console.log(query)
  return api<ApiResponse<any>>('/users/', {
    method: 'GET',
    query: {
      email: query?.email,
      phone: query?.phone && transformPhoneToNumber(query.phone)
    }
  })
}
