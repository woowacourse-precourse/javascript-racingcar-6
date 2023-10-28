const validation = (userInput) => {
  if (Number.isNaN(userInput)) {
    return "[ERROR] 숫자가 잘못된 형식입니다.";
  }
  return "VALID";
};

export default validation;
