const movement = Object.freeze({
  min: 0,
  max: 9,
  threshold: 4,
});

const name = Object.freeze({
  minLength: 1,
  maxLength: 5,
  separator: ',',
});

const CAR = Object.freeze({
  movement,
  name,
  MIN_POSITION: 0,
  MAX_POSITION: 6,
});

export default CAR;
