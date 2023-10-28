import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, MESSAGE } from '../../../constants/message';

const getRepeatNum = async () => {
  const repeatStr = await Console.readLineAsync(`${MESSAGE.howManyRepeat}\n`);
  const repeatNum = parseInt(repeatStr, 10);

  if (Number.isNaN(repeatNum)) {
    throw Error(ERROR_MESSAGE.requireDigit);
  }
  return repeatNum;
};

export default getRepeatNum;
