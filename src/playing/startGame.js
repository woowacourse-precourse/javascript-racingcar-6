import { MissionUtils } from '@woowacourse/mission-utils';
import { validateNames, validateParseNumber } from './checkList';
import { runRace } from './runRace';


const startGame = async () => {
  const humanInputName = await MissionUtils.Console.readLineAsync();
  const validatedNames = validateNames(humanInputName);

  MissionUtils.Console.print('시도할 횟수는 몇 회인가요 ?\n');
  const racingTrackInput = await MissionUtils.Console.readLineAsync();
  const racingTrack = validateParseNumber(racingTrackInput);

  runRace(racingTrack, validatedNames);
}

module.exports = { startGame };