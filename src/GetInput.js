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

  // for (const i of carNameArray) {
  //   if (i.length > 5 || i.length < 1) {
  //     throw new Error('[ERROR] 이름은 한자리 이상, 5자 이하만 가능합니다.');
  //   }
  // }

  return carNameArray;
}

export async function getRoundNum() {
  let competeRound = 0;
  // try {
  competeRound = await MissionUtils.Console.readLineAsync(
    '시도할 횟수는 몇 회인가요?\n',
  );

  if (Number.isNaN(competeRound) === true) {
    throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }
  // } catch (error) {
  //   throw error;
  // }

  // try catch 가 필요 업슨 상황인지, 그리고 왜 캐치문에 스로우 또 던져야함

  return competeRound;
}
