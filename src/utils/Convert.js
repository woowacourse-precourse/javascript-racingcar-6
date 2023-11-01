const Convert = {
  stringToMap(inputValue) {
    const carDistanceMap = new Map();
    if (inputValue.includes(',')) {
      const nameArr = inputValue.split(',');
      nameArr.forEach((name) => {
        carDistanceMap.set(name, '');
      });
    }

    if (!inputValue.includes(',')) carDistanceMap.set(inputValue, '');
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

export default Convert;
