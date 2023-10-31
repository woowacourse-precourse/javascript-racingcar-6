const validateCarNameInput = (car) => {
  const regex = /^[a-z]{1,5}$/;
  return regex.test(car);
};

export default validateCarNameInput;
