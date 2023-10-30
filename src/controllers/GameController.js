import { getCarNames, getTryCount } from "../views/InputView";
import isValidInput from "../models/IsValidInput";
import { setCars } from "../models/Car";

const startGame = async () => {
    const name = await getCarNames();
    isValidInput(name);
    setCars(name);
    
    const count = await getTryCount();
    isValidCount(count);
};

export default startGame;