export const goStopCar = (car) => {
  car.forEach((v) => {
    if (v.number >= 4) v.result = v.result + '-';
  });

  return car;
};
