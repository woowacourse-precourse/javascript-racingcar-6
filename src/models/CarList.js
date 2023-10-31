const CarsList = (inputName) => {
  const nameArray = inputName.split(',');
  const cars = {};

  nameArray.forEach((inputName) => {
    cars[inputName] = 0;
  });
};
export default CarsList;
