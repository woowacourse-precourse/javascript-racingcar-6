import { readLineCar } from './utils.js';

function isValidName(name) {
  const trimmedName = name.trim();

  // 이름이 비어있거나 길이가 5를 초과하는 경우 false 반환
  if (!trimmedName || trimmedName.length > 5) {
    return false;
  }
  return true;
}

function checkDuplicate(names) {
  const unique = new Set(names);
  return unique.size === names.length;
}

function createCarsFromNames(carNames) {
  const cars = {};
  carNames.forEach((name) => {
    cars[name] = '';
  });
  return cars;
}

function validateCarNames(carNames) {
  const isValid = carNames.every(isValidName);
  const isUnique = checkDuplicate(carNames);

  if (!isValid || !isUnique) {
    throw new Error(
      '[ERROR] 유효하지 않은 이름입니다. 이름의 길이는 5자를 초과하지 마십시오.',
    );
  }
}
function inputCarName() {
  return readLineCar()
    .then((inputCar) => {
      const carNames = inputCar.split(',').map((name) => name.trim());
      // 자동차 이름
      validateCarNames(carNames);

      // 유효한 자동차 이름으로 자동차 객체 생성
      return createCarsFromNames(carNames);
    })
    .catch((e) => {
      throw new Error(e.message);
    });
}

export default inputCarName;
