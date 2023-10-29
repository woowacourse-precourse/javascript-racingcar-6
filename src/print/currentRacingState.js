const currentRacingState = (object) => {
  const input_object_car = object.car;
  const input_object_currentState = "-".repeat(object.currentState);
  return `${input_object_car} : ${input_object_currentState}`;
};

export default currentRacingState;
