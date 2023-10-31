function carNameValidation(userInput) {
  const carNames = userInput.split(",");
  carNames.forEach((carName) => {
    if (carName.length > 5) {
      throw new Error("[ERROR] 5글자 이내로 입력해주세요.");
    }
  });
}

function gameNumberValidation(userInput) {
  if (!+userInput) {
    throw new Error("[ERROR] 숫자를 입력해 주세요.");
  }
}

export {carNameValidation, gameNumberValidation};