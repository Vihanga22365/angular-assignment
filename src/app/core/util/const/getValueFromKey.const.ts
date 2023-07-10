export function getKeyByValue(enumObject: any, value: any): string | undefined {
  return Object.keys(enumObject).find((key) => enumObject[key] == value);
}
