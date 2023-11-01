import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './models/Car.js';
import {
  validateCarName,
  validateCarNumber,
  validateRoundNum,
} from './validators/validator.js';
import MESSEGE from './constants/messeges.js';
import { getRaceresult, getWinners } from './race.js';

class App {
  async play() {
    // 게임 시작
    const carNames = await MissionUtils.Console.readLineAsync(
      MESSEGE.carNamesInput,
    );

    let carArray = carNames.split(',').map(temp => temp.trim());
    validateCarNumber(carArray);
    validateCarName(carArray);
    carArray = carArray.map(carName => new Car(carName));

    const roundNum = await MissionUtils.Console.readLineAsync(
      MESSEGE.roundNumInput,
    );
    validateRoundNum(roundNum);

    carArray = getRaceresult(roundNum, carArray);

    const winners = getWinners(carArray);
    const WinnerResultText = winners.map(car => car.name).join(', ');

    MissionUtils.Console.print(`최종 우승자 : ${WinnerResultText}`);
  }
}

export default App;
