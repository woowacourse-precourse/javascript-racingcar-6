import { getCarNames, getTryCount } from "../views/InputView";
import { isValidInput, isValidCount } from "../models/IsValidInput";
import { setCars } from "../models/setCar";
import { random } from "../util/RandomNum";

const startGame = async () => {
    const inputName = await getCarNames();
    const name = isValidInput(inputName);
    
    const count = await getTryCount();
    isValidCount(count);

    setCars(name, count);
};

export default startGame;