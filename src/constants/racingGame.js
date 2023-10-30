const round = Object.freeze({
  default: 0,
  unit: 1,
  min: 1,
  radix: 10,
});

const result = Object.freeze({
  default: [],
});

const RACING_GAME = Object.freeze({ round, result });

export default RACING_GAME;
