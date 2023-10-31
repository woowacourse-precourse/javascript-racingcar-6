const CONDITION = Object.freeze({
  INVALID_CAR_RACE_ENTRY: (carNames) => carNames.split(',').length < 2,
  INVALID_NAME_LENGTH: (names) => names.some((name) => name.length > 5),
  INVALID_TRY_COUNT: (count) => !/^[1-9][0-9]*$/.test(count),
  FORWARD: (number) => number >= 4,
});

export default CONDITION;
