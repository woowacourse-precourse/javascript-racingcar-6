const MissionUtils = require('@woowacourse/mission-utils');
const { validateNames, validateParseNumber } = require('./checkList');
const { runRace } = require('./runRace');


const startGame = async () => {
  const humanInputName = await MissionUtils.Console.readLineAsync();
  const validatedNames = validateNames(humanInputName);

  MissionUtils.Console.print('시도할 횟수는 몇 회인가요 ?\n');
  const racingTrackInput = await MissionUtils.Console.readLineAsync();
  const racingTrack = validateParseNumber(racingTrackInput);

  runRace(racingTrack, validatedNames);
}

module.exports = { startGame };