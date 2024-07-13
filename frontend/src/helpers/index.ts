export const transformPhoneToNumber = (number: string) => {
  return number.replace(/-/g, '')
}
