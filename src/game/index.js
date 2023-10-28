import prompt from '../../utils/prompt';
import stringToArray from '../../utils/stringToArray';
import validations from './game.error';
import PROMPT_PHASE from './game.promptPhase';

const racingCarGame = {
  async promptToRacingObject() {
    const carName = await prompt(PROMPT_PHASE.carName);
    const carNameArray = stringToArray(carName.replace(' ', ''), ',');
    validations.carsName(carNameArray);

    const moveCount = await prompt(PROMPT_PHASE.moveCount);
    validations.moveCount(moveCount);

    return { carNameArray, moveCount: Number(moveCount) };
  },
};
export default racingCarGame;
