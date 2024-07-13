import type { IUserItem } from '@/api/user/user.types'

export interface IProps {
  usersList: IUserItem[] | null
  isLoading: boolean
}