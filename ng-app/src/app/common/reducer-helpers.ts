/**
 * returns filtered array by @values
 * @param {T[]} array
 * @param itemsToRemove
 * @param {(obj: T) => U} getVal
 * @return {T[]}
 */
export function removeItems<T, U>(array: T[], itemsToRemove: T[], getVal: (obj: T) => U): T[] {
  return array.filter((item: T) => !itemsToRemove.map(getVal).includes(getVal(item)));
}

export function updateItems<T, U>(sourceArray: T[], updatedItems: T[], getComparedVal: (item: T) => U): T[] {
  let result = [...sourceArray];
  updatedItems.forEach((item: T) => {
    const index = sourceArray.findIndex(sourceItem => getComparedVal(sourceItem) === getComparedVal(item));
    result = removeItem(result, index);
    result = insertItem(result, item, index);
  });
  return result;
}

export function insertItem<T>(array: T[], item: T, index: number) {
  return [
    ...array.slice(0, index),
    item,
    ...array.slice(index)
  ];
}

export function removeItem<T>(array: T[], index) {
  return [
    ...array.slice(0, index),
    ...array.slice(index + 1)
  ];
}
