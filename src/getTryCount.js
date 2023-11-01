import { Console } from '@woowacourse/mission-utils';

const getTryCount = async function getTryCountByUserInput() {
  const TRY_COUNT = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');

  if (!!isNaN(TRY_COUNT)) {
    throw Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }

  return TRY_COUNT;
}

export default getTryCount;