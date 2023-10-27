const isLessThanFive = (list) => {
  return !list.some((carName) => carName.length > 5);
}

const isDuplicated = (list) => {
  return new Set(list).size === list.length;
}

export const checkValidCarsName = (list) => {
  return isDuplicated(list) && isLessThanFive(list);
}
