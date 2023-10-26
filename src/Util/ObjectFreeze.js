
export function convertObjectListFreeze(objectList) {
  return Object.freeze(objectList.map((carObject) => Object.freeze(carObject)));
}

export function convertListFreeze(list) {
  return Object.freeze(list);
}