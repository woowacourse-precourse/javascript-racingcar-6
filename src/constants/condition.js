const CONDITION = Object.freeze({
  INVALID_NAME_LENGTH: (names) => names.some((name) => name.length > 5),
  INVALID_TRY_COUNT: (count) => count < 1 || Math.ceil(count) !== count,
  FORWARD: (number) => number >= 4,
});

export default CONDITION;
