import { getCarNames, getTryCount } from "../views/InputView";
import { isValidInput } from "../models/IsValidInput";
import { setCars } from "../models/Car";

const startGame = async () => {
    const inputName = await getCarNames();
    const name = isValidInput(inputName);
    setCars(name);
    
    const count = await getTryCount();
    isValidCount(count);
};

export default startGame;