import { MissionUtils } from '@woowacourse/mission-utils';
import { nameError, numberError } from './gameError.js';
import { RaceController, RaceModel } from './gameModel.js';
import { PLAY_TEXT } from './message/gameMessage.js';

const gamePlay = (carNames, gameAttempt) => {
  MissionUtils.Console.print(PLAY_TEXT.result);

  const raceModel = new RaceModel();
  const raceController = new RaceController(raceModel);

  carNames.forEach((carName) => raceController.addCar(carName));
  raceController.play(gameAttempt);

  MissionUtils.Console.print(PLAY_TEXT.ending + `${raceController.getWinner()}`);
};

export const gameStart = async () => {
  try {
    const nameInput = await MissionUtils.Console.readLineAsync(PLAY_TEXT.inputName); //배열
    const carNames = nameInput.split(',');
    nameError(carNames); //배열

    const gameAttempt = await MissionUtils.Console.readLineAsync(PLAY_TEXT.inputNumber);
    numberError(gameAttempt); //문자열

    //에러 통과 후 play
    gamePlay(carNames, gameAttempt);
  } catch (error) {
    throw error;
  }
};
