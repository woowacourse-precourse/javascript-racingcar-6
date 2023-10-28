export const userInputCarNameLengthError = (carNamesArray) => {
  for (let i = 0; i < carNamesArray.length; i++) {
    if (carNamesArray[i].length > 5) {
      throw new Error('[ERROR] 5자리 이하의 이름을 입력해주세요.');
    }
  }
};

export const userInputTryNumberError = (tryNumber) => {
  if (tryNumber <= 0) {
    throw new Error('[ERROR] 잘못된 값을 입력하였습니다.');
  }
};

export const userInputCarNameFormError = (carNamesString) => {
  if (carNamesString.split('').includes(' ')) {
    throw new Error('[ERROR] 공백을 제거하여 입력해주세요.');
  }
};
