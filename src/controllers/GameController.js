import { getCarNames, getTryCount } from "../views/InputView";
import isValidInput from "../models/IsValidInput";
import { setCars } from "../models/Car";

const startGame = () => {
    const name = getCarNames();
    isValidInput(name);
    setCars(name);
    
    const count = getTryCount();
    isValidCount(count);
};

export default startGame;