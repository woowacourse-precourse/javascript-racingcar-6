import getCarNames from "../views/InputView";
import isValidInput from "../models/IsValidInput";

const startGame = () => {
    let name = getCarNames();
    isValidInput(name);
    
    let count = getTryCount();
    isValidCount(count);
};

export default startGame;