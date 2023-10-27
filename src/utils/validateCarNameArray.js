const validateCarNameArray = (cars) => {
  let uniqueCars = new Set(cars);
  if (uniqueCars.size !== cars.length) return false;
};

export default validateCarNameArray;
