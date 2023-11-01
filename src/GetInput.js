import { MissionUtils } from '@woowacourse/mission-utils';

export async function getCarName() {
  let carNameArray = [];
  const carNameString = await MissionUtils.Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  );

  carNameArray = carNameString.split(',');

  carNameArray.forEach((i) => {
    if (i.length > 5 || i.length < 1) {
      throw new Error('[ERROR] 이름은 한자리 이상, 5자 이하만 가능합니다.');
    }
  });

  return carNameArray;
}

export async function getRoundNum() {
  let competeRound = 0;

  competeRound = await MissionUtils.Console.readLineAsync(
    '시도할 횟수는 몇 회인가요?\n',
  );

  if (Number.isNaN(competeRound) === true) {
    throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }

  return competeRound;
}
