export const createCarData = (carName) => {
  const carNameList = carName.split(',');
  const carData = [];

  carNameList.forEach((car) => {
    carData.push({ name: car, number: 0, result: '' });
  });

  return carData;
};
