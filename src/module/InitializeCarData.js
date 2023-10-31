const initializeCarData = (carNames, carData) => {
  carNames.forEach(name => {
    carData[name] = '';
  });
  return carData;
};

export default initializeCarData;
