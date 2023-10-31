import { MissionUtils } from '@woowacourse/mission-utils';
import Check from './Check.js';

const getUserInput = async () => {
  const userInput = {
    userCount: 0,
    carNames: [],
  };
  const userCar = await MissionUtils.Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  );
  userInput.userCount =
    await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  userInput.carNames = await userCar.split(',');
  if (!Check.isValidCar(userInput.carNames)) {
    throw new Error('[ERROR] 자동차 이름을 잘못 입력했습니다.');
  }
  if (!Check.isValidNumber(userInput.userCount)) {
    throw new Error('[ERROR] 시도 횟수를 잘못 입력했습니다.');
  }
  return userInput;
};

export default getUserInput;
