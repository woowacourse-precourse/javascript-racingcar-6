import CalculateAdvance from '../model/calculate_advance.js';
import GameWinner from '../model/game_winner.js';
import PrintGameResult from '../view/print_game_result.js';
import CarNameError from '../../utils/error/car_name_error.js';
import RacingCntError from '../../utils/error/racing_cnt_error.js';
import userInput from '../../utils/user_input.js';
import InputQuestion from '../../user_interface/input_question.js';

class GameManage {
  constructor() {
    this.RACING_CAR = null;
    this.RACING_CNT = null;
  }

  async inputRacingCar() {
    this.RACING_CAR = await userInput(InputQuestion.racingCar());
    this.RACING_CAR = this.RACING_CAR.split(',');
    await this.checkCarName();
  }

  async checkCarName() {
    const ERROR = new CarNameError(this.RACING_CAR);
    if (
      !ERROR.carNameNotExist() &&
      !ERROR.carNameNotString() &&
      !ERROR.carNameLenOverFive() &&
      !ERROR.carNameBlank() &&
      !ERROR.carNameDuplication()
    ) {
      await this.inputRacingCnt();
    }
  }

  async inputRacingCnt() {
    this.RACING_CNT = await userInput(InputQuestion.racingCnt());
    this.checkRacingCnt();
  }

  checkRacingCnt() {
    const ERROR = new RacingCntError(this.RACING_CNT);
    if (
      !ERROR.racingCntNotExist() &&
      !ERROR.racingCntNotNum() &&
      !ERROR.racingCntNotPositiveNum()
    ) {
      this.gameResult();
    }
  }

  gameResult() {
    const RESULT = new CalculateAdvance(this.RACING_CAR, this.RACING_CNT).gameResult();
    const WINNER = new GameWinner(RESULT).findWinner();
    this.printGameResult(RESULT, WINNER);
  }

  printGameResult(RESULT, WINNER) {
    new PrintGameResult(this.RACING_CNT, RESULT, WINNER).printGameResult();
  }
}

export default GameManage;
