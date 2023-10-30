export const createCarData = (carNameList) => {
  const carData = [];

  carNameList.forEach((carName) => {
    carData.push({ name: carName, number: 0, result: '' });
  });

  return carData;
};
