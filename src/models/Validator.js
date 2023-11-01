import { ERROR_MESSAGE } from '../constants/Message.js';
import { GAME_SETTING, SYMBOL_SETTING } from '../constants/Setting.js';

const Validator = {
  carNames(inputValue) {
    if (inputValue === SYMBOL_SETTING.emptyString) {
      throw new Error(ERROR_MESSAGE.carName);
    }

    if (
      !inputValue.includes(SYMBOL_SETTING.nameSeparator) &&
      inputValue.length > GAME_SETTING.nameMaxLange
    ) {
      throw new Error(ERROR_MESSAGE.carName);
    }

    if (inputValue.includes(SYMBOL_SETTING.nameSeparator)) {
      const nameArr = inputValue.split(SYMBOL_SETTING.nameSeparator);
      const uniqueNameSet = new Set(nameArr);
      if (nameArr.length !== uniqueNameSet.size) {
        throw new Error(ERROR_MESSAGE.carName);
      }

      nameArr.forEach((element) => {
        if (
          element.length < GAME_SETTING.nameMinLange ||
          element.length > GAME_SETTING.nameMaxLange
        ) {
          throw new Error(ERROR_MESSAGE.carName);
        }
      });
    }
  },

  roundNumber(inputValue) {
    const stringToNumber = Number(inputValue);
    if (Number.isNaN(stringToNumber)) {
      throw new Error(ERROR_MESSAGE.roundNumber);
    }

    if (stringToNumber < GAME_SETTING.roundMinLange) {
      throw new Error(ERROR_MESSAGE.roundNumber);
    }
  },
};

export default Validator;
