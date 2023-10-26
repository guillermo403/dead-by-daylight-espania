export const stringToJson = (str: string): any => {
  try {
    return JSON.parse(str)
  } catch (err) {
    return {}
  }
}
