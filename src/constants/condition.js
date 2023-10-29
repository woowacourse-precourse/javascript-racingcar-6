const CONDITION = Object.freeze({
  INVALID_NAME_LENGTH: (names) => names.some((name) => name.length > 5),
  INVALID_TRY_COUNT: (count) => !/^[1-9][0-9]*$/.test(count),
  FORWARD: (number) => number >= 4,
});

export default CONDITION;
