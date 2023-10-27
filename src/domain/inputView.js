import { MissionUtils } from '@woowacourse/mission-utils';

export const getCarName = async () => {
  const CAR_NAMES = await MissionUtils.Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  );
  MissionUtils.Console.print(CAR_NAMES);
  await getTryNumber();
};

export const getTryNumber = async () => {
  const USER_TRY_NUMBER = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  MissionUtils.Console.print(USER_TRY_NUMBER);
};
