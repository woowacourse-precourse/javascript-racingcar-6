export function getCarNewObject(paramCarName, paramMoveCount) {
  return Object.freeze({
    carName: paramCarName,
    moveCount: paramMoveCount,
  });
}

export function convertObjectListFreeze(objectList) {
  return Object.freeze(
    objectList.map(carObject => getCarNewObject(carObject.carName, carObject.moveCount)),
  );
}

export function convertListFreeze(list) {
  return Object.freeze([...list]);
}
