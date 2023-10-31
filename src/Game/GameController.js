import { MESSAGES } from "../constants/index.js";
import { print, readLineAsync } from "../utils/index.js";
import Validate from "./Validate.js";
import Racing from "./Racing.js";
class GameController {
  
    constructor() {
        this.validate = new Validate();
        this.racing = new Racing();
        this.count = 0;
    }
  
    async inputCars() {
        const input = await readLineAsync(MESSAGES.QUEST_CAR_NAME);
        this.validate.validateCarName(input);
        this.racing.registCar(input);
    }
    async inputTryMoveCount() {
        const input = await readLineAsync(MESSAGES.QUEST_TRY_COUNT);
        this.validate.validateTryMoveCount(input);
        this.count = input;
        print("");
    }

    start() {
        const racing = this.racing;
        print(`${MESSAGES.PROGRESS_RESULT}`);
        for (let i=0; i<this.count; i++) {
            racing.moveCycle();
            racing.oneMoveCycleResult();
            print("");
        }
    }
    result() {
        const racing = this.racing;
        const winner = racing.getWinner();
        print(`${MESSAGES.WINNER}${winner}`);
    }

    
}

export default GameController;