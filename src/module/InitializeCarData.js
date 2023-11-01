const initializeCarData = (carNames) => {
  const carData = {};
  carNames.forEach(name => {
    carData[name] = '';
  });
  return carData;
};

export default initializeCarData;
