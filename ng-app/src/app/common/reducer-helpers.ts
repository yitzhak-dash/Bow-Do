/**
 * returns filtered array by @values
 * @param {T[]} array
 * @param {U[]} values
 * @param {(obj: T) => U} getVal
 * @return {T[]}
 */
export function removeItems<T, U>(array: T[], values: U[], getVal: (obj: T) => U) {
  return array.filter((item: T) => !values.includes(getVal(item)));
}
