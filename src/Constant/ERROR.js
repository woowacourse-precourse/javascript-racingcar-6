const ERROR = Object.freeze({
  nameNotNull: '[ERROR] 1개 이상의 자동차 이름을 입력하세요.',
  nameInputLen: `[ERROR] 자동차의 이름의 길이 제한을 맞춰주세요.(min : 1자, max : 5자)`,
  nameNotDuplicate: '[ERROR] 중복된 자동차 이름은 사용하실 수 없습니다.',
  cntPositiveInteger: '[ERROR] 올바른 자연수를 입력해주세요',
});

export default ERROR;
