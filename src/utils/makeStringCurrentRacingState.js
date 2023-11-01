const makeStringCurrentRacingState = (object) => {
  const inputObjectCar = object.car;
  const inputObjectCurrentState = "-".repeat(object.currentState);
  return `${inputObjectCar} : ${inputObjectCurrentState}`;
};

export default makeStringCurrentRacingState;
