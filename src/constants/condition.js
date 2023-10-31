const CONDITION = Object.freeze({
  carNameLength: 5,
  notNormalCharacter: /[^a-z|가-힣|0-9]/gi,
  rangeStart: 0,
  rangeEnd: 9,
  movingForward: 4,
});

export default CONDITION;
