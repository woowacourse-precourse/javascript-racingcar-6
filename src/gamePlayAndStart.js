import { MissionUtils } from '@woowacourse/mission-utils';
import { nameError, numberError } from './gameError.js';
import { RaceController, RaceModel } from './gameModel.js';

const gamePlay = (carNames, gameAttempt) => {
  MissionUtils.Console.print('\n실행 결과');

  const raceModel = new RaceModel();
  const raceController = new RaceController(raceModel);

  carNames.forEach((carName) => raceController.addCar(carName));
  raceController.play(gameAttempt);

  MissionUtils.Console.print(`\n최종 우승자 : ${raceController.getWinner()}`);
};

export const gameStart = async () => {
  try {
    const nameInput = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    ); //배열
    const carNames = nameInput.split(',');
    nameError(carNames); //배열

    const gameAttempt = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    numberError(gameAttempt); //문자열

    //에러 통과 후 play
    gamePlay(carNames, gameAttempt);
  } catch (error) {
    throw error;
  }
};
