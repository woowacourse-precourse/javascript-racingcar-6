import { MissionUtils } from '@woowacourse/mission-utils';

export async function inputRacingCars() {
  const racingCars = await MissionUtils.Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
  );

  validateRacingCars(racingCars);

  return racingCars;
}

function validateRacingCars(racingCars) {
  const racingCarsArr = racingCars.split(',');

  if (racingCarsArr.length < 2) {
    throw new Error(
      '[ERROR] Invalid racing car input: 경주할 자동차 이름이 하나 이하입니다. 둘 이상의 경주할 자동차 이름을 입력하세요.'
    );
  }
  if (racingCarsArr.length !== new Set(racingCarsArr).size) {
    throw new Error(
      '[ERROR] Invalid racing car input: 경주할 자동차 이름이 중복되었습니다. 서로 다른 이름을 입력하세요.'
    );
  }
  if (racingCarsArr.some((racingCar) => racingCar === '')) {
    throw new Error(
      '[ERROR] Invalid racing car input: 쉼표를 연속하여 입력하였습니다. 쉼표를 연속하여 입력하지 마세요.'
    );
  }
  if (
    racingCarsArr.some(
      (racingCar) => racingCar.length <= 0 || racingCar.length > 5
    )
  ) {
    throw new Error(
      '[ERROR] Invalid racing car input: 경주할 자동차 이름의 길이가 적절하지 않습니다. 경주할 자동차 이름의 길이는 1 이상, 5 이하여야 합니다.'
    );
  }
}

export async function inputAttemps() {
  const attemps = await MissionUtils.Console.readLineAsync(
    '시도할 횟수는 몇 회인가요?'
  );

  validateAttemps(attemps);

  return attemps;
}

function validateAttemps(attemps) {
  if (attemps === '') {
    throw new Error(
      '[ERROR] Invalid number of attemps input: 시도할 횟수를 입력하지 않았습니다. 시도할 횟수를 입력하세요.'
    );
  }
  if (attemps === '0') {
    throw new Error(
      '[ERROR] Invalid number of attemps input: 시도할 횟수에 0을 입력하였습니다. 시도할 횟수는 1이상의 수를 입력하세요.'
    );
  }
  if (Number(attemps) < 0) {
    throw new Error(
      '[ERROR] Invalid number of attemps input: 시도할 횟수에 음수를 입력하였습니다. 시도할 횟수는 1이상의 수를 입력하세요.'
    );
  }
  if (!Number.isInteger(Number(attemps))) {
    throw new Error(
      '[ERROR] Invalid number of attemps input: 시도할 횟수에 문자를 입력하였습니다. 시도할 횟수는 숫자만 입력하세요.'
    );
  }
}
