import { MESSAGES } from "./constants/index.js";
import { print, readLineAsync } from "./utils/index.js";
import Validate from "./Validate.js";

class GameController {
    validate;
    constructor() {
        this.init();
    }
    init() {
        this.validate = new Validate();
    }
    
    async inputCars() {
        const input = await readLineAsync(MESSAGES.QUEST_CAR_NAME);
        this.validate.validateCarName(input);
        // Racing 클래스의 car 멤버변수에 배열을 집어넣을 예정
    }
    
}

export default GameController;