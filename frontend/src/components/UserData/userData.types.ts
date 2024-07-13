import type { IFetchUserResponse } from '@/api/user/user.types'

export interface IProps {
  user: IFetchUserResponse | null
  isLoading: boolean
}