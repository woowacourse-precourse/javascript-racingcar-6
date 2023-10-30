function carValidation(carNames) {
  const cars = new Set(carNames);
  const space = /\s/g;
  if (cars.size !== carNames.length) {
    throw new Error ("[ERROR] 자동차의 이름을 중복되지 않게 입력해주세요.")
  }
  if (carNames.length < 2) {
    throw new Error ("[ERROR] 최소한 두개 이상의 이름을 입력해주세요.")
  }
  for (let i = 0; i < carNames.length; i++) {
    if (carNames[i].length > 5 || carNames[i].length < 1) {
      throw new Error ("[ERROR] 1 ~ 5글자의 자동차 이름을 입력해주세요.")
    }
    if (carNames[i].match(space)) {
      throw new Error ("[ERROR] 공백을 제외한 자동차의 이름을 입력해주세요.")
    }
  }
}

export default carValidation;