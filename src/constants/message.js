const MESSAGE = Object.freeze({
  input: {
    carName: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    numberOfTimes: '시도할 횟수는 몇 회인가요?\n'
  },
  error: {
    carName:
      '[ERROR] 1글자 이상, 5글자 이하의 이름을 쉼표(,)로 구분하여 입력하세요.',
    specialCharacter:
      '[ERROR] 특수문자, 숫자, 자음, 모음, 띄어쓰기를 제와한 이름을 입력하세요.',
    duplicateName: '[ERROR] 중복된 이름이 있습니다.',
    numberOfTimes: '[ERROR] 1 이상의 숫자를 입력하세요.'
  },
  result: {
    execution: '\n실행 결과',
    distance: '-'
  }
});

export default MESSAGE;
