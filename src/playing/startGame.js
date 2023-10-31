const MissionUtils = require('@woowacourse/mission-utils');
const { validateNames, validateParseNumber } = require('./checkList');
const { runRace } = require('./runRace');


const startGame = async () => {
  const humanInputName = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
  const validatedNames = validateNames(humanInputName);

  const racingTrackInput = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요 ?\n');
  const racingTrack = validateParseNumber(racingTrackInput);

  runRace(racingTrack, validatedNames);
}

module.exports = { startGame };