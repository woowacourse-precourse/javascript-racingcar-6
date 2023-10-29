import getCarNames from "../views/InputView";
import isValidInput from "../models/IsValidInput";

const startGame = () => {
    let name = getCarNames();
    if ( isValidInput(name) ) {
        let count = getTryCount();
    }
};

export default startGame;