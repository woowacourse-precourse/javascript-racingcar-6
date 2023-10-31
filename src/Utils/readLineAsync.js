import { MissionUtils } from '@woowacourse/mission-utils';
const { Console } = MissionUtils;

export const readLineAsync = async (message) => {
  return await Console.readLineAsync(message);
};
