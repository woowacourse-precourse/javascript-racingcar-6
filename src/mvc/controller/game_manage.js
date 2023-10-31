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
  }
}

export default GameManage;
