export interface ApiResponse<T> {
  detail: T
  message: string
  status_code: number
}