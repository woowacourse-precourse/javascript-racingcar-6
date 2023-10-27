import { MissionUtils } from '@woowacourse/mission-utils';
import { validateNames } from './checkList';


const startGame = async () => {
  const humanInputName = await MissionUtils.Console.readLineAsync();
  const validatedNames = validateNames(humanInputName);
}

module.exports = { startGame };