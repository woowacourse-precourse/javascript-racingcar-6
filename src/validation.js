import { ERRMSG } from "./message.js"

function carValidation(carNames) {
  const cars = new Set(carNames);
  const space = /\s/g;
  if (cars.size !== carNames.length) {
    throw new Error (ERRMSG.DUPLICATION)
  }
  if (carNames.length < 2) {
    throw new Error (ERRMSG.NOT_ENOUGH)
  }
  for (let i = 0; i < carNames.length; i++) {
    if (carNames[i].length > 5 || carNames[i].length < 1) {
      throw new Error (ERRMSG.LENGTH)
    }
    if (carNames[i].match(space)) {
      throw new Error (ERRMSG.CAR_EMPTY)
    }
  }
}

function countValidation(cnt) {
  const num = Number(cnt)
  if (isNaN(num)) {
    throw new Error (ERRMSG.STRING)
  }

  if (num < 1) {
    throw new Error (ERRMSG.COUNT_EMPTY)
  }
}

export {carValidation, countValidation};