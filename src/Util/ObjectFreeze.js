
export function convertObjectListFreeze(objectList) {
  return Object.freeze(objectList.map((carObject) => 
    getCarNewObject(carObject.carName, carObject.moveCount)
  ));
}

export function getCarNewObject(carName, moveCount) {
  return Object.freeze({
    carName : carName,
    moveCount : moveCount
  })
}

export function convertListFreeze(list) {
  return Object.freeze([...list]);
}