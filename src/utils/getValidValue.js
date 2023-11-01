export function getValidCars(cars) {
  const carList = cars.split(',');

  const underFiveDigitCars = [];

  for (const car of carList) {
    const trimmedCarName = car.trim();

    if (trimmedCarName.length > 5)
      throw new Error(
        '[ERROR] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능합니다.'
      );
    const validCar = { name: trimmedCarName, position: 0 };
    underFiveDigitCars.push(validCar);
  }

  return underFiveDigitCars;
}

export function getValidRound(round) {
  const roundNumber = Number(round);

  if (isNaN(round)) {
    throw new Error('[ERROR] 시도할 횟수는 숫자만 가능합니다.');
  }

  if (!Number.isInteger(roundNumber)) {
    throw new Error('[ERROR] 시도할 횟수는 자연수만 가능합니다.');
  }

  return roundNumber;
}
