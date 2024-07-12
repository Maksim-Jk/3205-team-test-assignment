export const transformPhoneToNumber = (phone: string) => {
  return phone.replace(/-/g, '')
}
