import CarNameError from '../../utils/error/car_name_error.js';
import InputQuestion from '../../ui/input_question.js';
import userInput from '../../utils/user_input.js';

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
    if (!ERROR.carNameNotExist()
        && !ERROR.carNameNotString()
        && !ERROR.carNameLenOverFive()
        && !ERROR.carNameBlank()
        && !ERROR.carNameDuplication()) {}
  }
}

export default GameManage;
