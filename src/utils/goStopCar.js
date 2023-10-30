export const goStopCar = (carData) => {
  carData.forEach((data) => {
    if (data.number >= 4) data.result = data.result + '-';
  });

  return carData;
};
