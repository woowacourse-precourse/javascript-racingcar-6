const movement = Object.freeze({
  min: 0,
  max: 9,
  threshold: 4,
  unit: 1,
});

const name = Object.freeze({
  minLength: 1,
  maxLength: 5,
  separator: ',',
});

const position = Object.freeze({
  default: 0,
});

const CAR = Object.freeze({
  movement,
  name,
  position,
});

export default CAR;
