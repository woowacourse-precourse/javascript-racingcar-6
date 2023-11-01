import { SYMBOL_SETTING } from '../constants/Setting.js';

const Converter = {
  stringToMap(inputValue) {
    const carDistanceMap = new Map();
    if (inputValue.includes(SYMBOL_SETTING.nameSeparator)) {
      const nameArr = inputValue.split(SYMBOL_SETTING.nameSeparator);
      nameArr.forEach((name) => {
        carDistanceMap.set(name, SYMBOL_SETTING.emptyString);
      });
    }

    if (!inputValue.includes(SYMBOL_SETTING.nameSeparator)) {
      carDistanceMap.set(inputValue, SYMBOL_SETTING.emptyString);
    }
    return carDistanceMap;
  },

  swapMap(carDistanceMap) {
    const distanceCarMap = new Map();
    carDistanceMap.forEach((value, key) => {
      if (distanceCarMap.has(value.length)) {
        distanceCarMap.set(value.length, [
          ...distanceCarMap.get(value.length),
          key,
        ]);
      } else {
        distanceCarMap.set(value.length, [key]);
      }
    });
    return distanceCarMap;
  },
};

export default Converter;
