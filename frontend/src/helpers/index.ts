export const transformPhoneToNumber = (number: string) => {
  return number.replace(/-/g, '')
}

export const prettifyPhoneNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, '')
  const formated = cleaned.replace(/(\d{2})(?=\d)/g, '$1-')
  return formated.substring(0, 8)
}