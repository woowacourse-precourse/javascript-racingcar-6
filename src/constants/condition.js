const CONDITION = Object.freeze({
  NAME_LENGTH: (names) => names.some((name) => name.length > 5),
  TRY_COUNT: (count) => count < 1 || Math.ceil(count) !== count,
});

export default CONDITION;
