export function mapObjectFields(obj: any, fieldPairs: string[]) {
  const newObj = { ...obj }

  for (const [newKey, originalKey] of Object.entries(fieldPairs)) {
    newObj[newKey] = obj[originalKey]
  }

  return newObj
}

export function mapObjectArrayFields(array: any, fieldPairs: any) {
  if (!Array.isArray(array) || !Object.keys(fieldPairs).length) {
    return array
  }

  return array.map((item) => mapObjectFields(item, fieldPairs))
}
