function nameValidation(carNames) {
    for (let i = 0; i < carNames.length; i++) {
        if (carNames[i].length > 5 || carNames[i].length < 1) {
          throw new Error ("[ERROR] 1 ~ 5글자의 자동차 이름을 입력해주세요.")
        }
    }    
}

export default nameValidation;