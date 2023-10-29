export function validateCarNames(input) {
  if (input === '') {
    throw new Error('[ERROR] 입력값이 없습니다.');
  }

  if (input.indexOf(' ') !== -1) {
    throw new Error('[ERROR] 입력값에 공백이 포함되었습니다.');
  }

  const cars = input.split(',').filter((v) => v);

  if (cars.length < 2) {
    throw new Error('[ERROR] 자동차는 최소 2대여야합니다.');
  }

  if (new Set(cars).size !== cars.length) {
    throw new Error('[ERROR] 중복된 자동차가 존재합니다.');
  }

  const isExceed = cars.some((car) => car.length > 5);

  if (isExceed) {
    throw new Error('[ERROR] 각 자동차명의 길이는 최대 5자입니다.');
  }

  return cars;
}

export function validateTotalRounds(input) {
  const result = Number(input);

  if (isNaN(result)) {
    throw new Error('[ERROR] 숫자를 입력해주세요.');
  }

  return result;
}
