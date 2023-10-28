function isvalidCarNames(carNames) {
    if (carNames.length < 2) {
      throw new Error('자동차는 2대 이상이어야 합니다.');
    }
    if (carNames.some(name => name.length > 5)) {
      throw new Error('자동차 이름은 5자를 초과할 수 없습니다.');
    }
    if (carNames.some(name => name === '')) {
      throw new Error('올바른 이름을 입력하세요.');
    }
  }
  
  function isvalidAttempt(attempt) {
    if (isNaN(attempt) || attempt <= 0) {
      throw new Error('시도할 횟수는 1 이상의 숫자이어야 합니다.');
    }
  }

  export {isvalidCarNames, isvalidAttempt};