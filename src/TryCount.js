import { MissionUtils } from '@woowacourse/mission-utils';

async function getAndValidateTryCount() {
  const tryCount = await getTryCount();
  validateTryCount(tryCount);
  return tryCount;
}

async function getTryCount() {
  const tryCount = await MissionUtils.Console.readLineAsync(
    '시도할 횟수는 몇 회인가요?\n'
  );
  return Number(tryCount);
}

function validateTryCount(tryCount) {
  if (!Number.isInteger(tryCount)) {
    throw new Error('[ERROR] 횟수는 숫자만 입력해야 합니다.');
  }

  if (tryCount < 1) {
    throw new Error('[ERROR] 횟수는 1이상의 자연수를 입력해야 합니다.');
  }
}

export default getAndValidateTryCount;
