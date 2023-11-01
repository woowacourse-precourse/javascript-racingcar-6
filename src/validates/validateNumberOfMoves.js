import { Messages } from "../Constants/Messages.js";

const vaildateNumberOfMoves = (numberOfMoves) => {
    if (!Number(numberOfMoves)) {
        throw new Error(Messages.ERROR_NUMBER_OF_MOVES_INPUT_WORNG);
    }
}

export default vaildateNumberOfMoves;