const isValidNumber = (userInput) => {
  if (Number.isNaN(+userInput)) {
    return "[ERROR] 숫자가 잘못된 형식입니다.";
  }
  if (Number(userInput) < 0) {
    return "[ERROR] 숫자가 잘못된 형식입니다.";
  }
  return "VALID";
};

const isValidName = (nameArray) => {
  for (let i = 0; i < nameArray.length; i++) {
    if (nameArray[i].length > 4) {
      return "[ERROR] 숫자가 잘못된 형식입니다.";
    }
  }
  return "VALID";
};

export { isValidNumber, isValidName };
