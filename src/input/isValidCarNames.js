function isMoreThanTwo(cars) {
  return cars.length >= 2;
}

function isLessThanFiveLetters(cars) {
  return cars.every((car) => car.length <= 5);
}

function isValidCarNames(cars) {
  if (!isMoreThanTwo(cars)) throw new Error('[ERROR] 2대 이상의 자동차가 입력되어야 합니다.');
  if (!isLessThanFiveLetters(cars)) throw new Error('[ERROR] 5글자 이내의 자동차 이름을 입력해주세요.');
  return true;
}

export default isValidCarNames;
