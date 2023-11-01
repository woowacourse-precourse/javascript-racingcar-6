import { getCarNames, getAttemptCount } from "../views/InputView";
import { checkValidInput, checkValidCount } from "../models/CheckValidInput";
import createCars from "../models/CreateCars";

const startGame = async () => {
    //자동차 이름 입력 받고 유효성 검사
    const inputName = await getCarNames();
    const name = checkValidInput(inputName);
    
    //시도 횟수 입력 받고 유효성 검사
    const count = await getAttemptCount();
    checkValidCount(count);

    createCars(name, count);
};

export default startGame;